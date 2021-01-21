import React, { useState, useEffect } from "react";
import RootContext from "../context";
import Router from "../routing/Router";
import { initialRoomData } from "../data";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Modal from "../components/Modal";
import { devices } from "../data";

const Root = () => {
  const [roomsList, setRoomsList] = useState([...initialRoomData]);
  const [isAddRoomModal, setIsAddRoomModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomCondition, setRoomCondition] = useState({
    temp: null,
    humidity: null,
  });
  const [modalType, setModalType] = useState("addRoom");
  const [selectedDeviceName, setSelectedDeviceName] = useState("");

  const handleSelectedDeviceChange = (e) => {
    setSelectedDeviceName(e.target.value);
  };

  const getRoomCondition = () => {
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
  };

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
        room.devices = [
          ...room.devices,
          { deviceId: uuidv4(), ...foundDevice },
        ];
      }
      return room;
    });

    setRoomsList([...mappedRooms]);

    setAddRoomModalClose();

    e.target.reset();
  };

  const deleteRoomDevice = (deviceId) => {
    const mappedRooms = roomsList.map((room) => {
      if (selectedRoom.id === room.id) {
        room.devices = selectedRoom.devices.filter(
          (device) => device.deviceId !== deviceId
        );
      }
      return room;
    });

    setRoomsList([...mappedRooms]);
  };

  return (
    <>
      <RootContext.Provider
        value={{
          getRoomCondition,
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
        }}
      >
        <Modal />
        <Router />
      </RootContext.Provider>
    </>
  );
};

export default Root;
