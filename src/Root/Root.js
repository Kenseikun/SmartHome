import React, { useEffect, useState } from "react";
import RootContext from "../context";
import Router from "../routing/Router";
import { initialRoomData } from "../data";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Modal from "../components/Modal";
import { devices } from "../data";
import {
  getRoomListFromLocalStorage,
  getSelectedRoomListFromLocalStorage,
} from "../utils/localStorageGetters";

const Root = () => {
  const [roomsList, setRoomsList] = useState(getRoomListFromLocalStorage());
  const [isAddRoomModal, setIsAddRoomModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(
    getSelectedRoomListFromLocalStorage()
  );

  const [roomCondition, setRoomCondition] = useState({
    temp: null,
    humidity: null,
  });
  const [modalType, setModalType] = useState("addRoom");

  const [selectedDeviceName, setSelectedDeviceName] = useState("");

  const [isAlertOpen, setisAlertOpen] = useState(false);

  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  const setRoomListToLocalStorage = () => {
    localStorage.setItem("roomList", JSON.stringify(roomsList));
  };

  const setSelectedRoomListToLocalStorage = () => {
    localStorage.setItem("selectedRoom", JSON.stringify(selectedRoom));
  };

  useEffect(() => {
    setRoomListToLocalStorage();
  }, [roomsList]);

  useEffect(() => {
    setSelectedRoomListToLocalStorage();
  }, [selectedRoom]);

  const handleAlertOpen = (deviceId) => {
    setisAlertOpen(true);
    setSelectedDeviceId(deviceId);
  };

  const handleAlertClose = () => {
    setisAlertOpen(false);
  };

  const handleSelectedDeviceChange = (e) => {
    setSelectedDeviceName(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        const { temp, humidity } = response.data.main;
        const celciusTemp = Math.round(temp - 273);
        setRoomCondition({
          temp: celciusTemp,
          humidity,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const setAddRoomModalOpen = () => {
    setIsAddRoomModal(true);
  };

  const setAddRoomModalClose = () => {
    setIsAddRoomModal(false);
  };

  const addNewRoom = (e) => {
    e.preventDefault();
    const roomName = e.target.roomName.value;
    const familyMembers = e.target.familyMembers.value;

    const newRoom = {
      id: uuidv4(),
      roomName,
      familyMembers,
      numberOfDevices: 0,
      devices: [],
      isDevicesActive: false,
    };

    setRoomsList([...roomsList, newRoom]);

    setAddRoomModalClose();

    e.target.reset();
  };

  const selectRoom = (id) => {
    const foundRoom = roomsList.find((room) => {
      return room.id === id;
    });
    setSelectedRoom(foundRoom);
    setModalType("newDevice");
  };

  const modalTypeChange = (type) => {
    setModalType(type);
  };

  const addNewDeviceToRoom = (e) => {
    e.preventDefault();
    const foundDevice = devices.find(
      (device) => device.deviceName === selectedDeviceName
    );

    const mappedRooms = roomsList.map((room) => {
      if (room.id === selectedRoom.id) {
        room.numberOfDevices += 1;
        room.devices = [
          ...room.devices,
          { deviceId: uuidv4(), ...foundDevice },
        ];
      }
      return room;
    });

    setRoomsList([...mappedRooms]);

    setAddRoomModalClose();

    setSelectedDeviceName("");
  };

  const deleteRoomDevice = () => {
    const mappedRooms = roomsList.map((room) => {
      if (selectedRoom.id === room.id) {
        room.numberOfDevices -= 1;
        room.devices = selectedRoom.devices.filter(
          (device) => device.deviceId !== selectedDeviceId
        );
      }
      return room;
    });

    setRoomsList([...mappedRooms]);
  };

  const toggleAllRoomDevicesActive = (roomId) => {
    const mapedRooms = roomsList.map((room) => {
      if (room.id === roomId) {
        room.isDevicesActive = !room.isDevicesActive;
        room.devices = room.devices.map((device) => {
          if (device.deviceName !== "Fridge") {
            device.deviceOption.isdeviceActive = room.isDevicesActive;
          }
          return device;
        });
      }
      return room;
    });

    setRoomsList([...mapedRooms]);
  };

  const toggleRoomSingleDeviceActive = (deviceId) => {
    const mapedRooms = roomsList.map((room) => {
      if (room.id === selectedRoom.id) {
        room.devices = room.devices.map((device) => {
          if (device.deviceId === deviceId) {
            device.deviceOption.isdeviceActive = !device.deviceOption
              .isdeviceActive;
          }
          return device;
        });
      }
      return room;
    });

    setRoomsList([...mapedRooms]);
  };

  const handleDeviceOptionValueChange = (deviceId, e) => {
    const mapedRooms = roomsList.map((room) => {
      if (room.id === selectedRoom.id) {
        room.devices = room.devices.map((device) => {
          if (device.deviceId === deviceId) {
            device.deviceOption.optionValue = e.target.value;
          }
          return device;
        });
      }
      return room;
    });

    setRoomsList([...mapedRooms]);
  };

  return (
    <>
      <RootContext.Provider
        value={{
          roomsList,
          isAddRoomModal,
          setAddRoomModalOpen,
          setAddRoomModalClose,
          addNewRoom,
          selectRoom,
          selectedRoom,
          roomCondition,
          modalTypeChange,
          modalType,
          selectedDeviceName,
          handleSelectedDeviceChange,
          addNewDeviceToRoom,
          deleteRoomDevice,
          toggleAllRoomDevicesActive,
          toggleRoomSingleDeviceActive,
          handleDeviceOptionValueChange,
          isAlertOpen,
          handleAlertClose,
          handleAlertOpen,
          selectedDeviceId,
        }}
      >
        <Modal />
        <Router />
      </RootContext.Provider>
    </>
  );
};

export default Root;
