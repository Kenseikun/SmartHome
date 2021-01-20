import React, { useState } from "react";
import RootContext from "../context";
import Router from "../routing/Router";
import { initialRoomData } from "../data";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Modal from "../components/Modal";

const Root = () => {
  const [roomsList, setRoomsList] = useState(initialRoomData);
  const [isAddRoomModal, setIsAddRoomModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomCondition, setRoomCondition] = useState({
    temp: null,
    humidity: null,
  });
  const [modalType, setModalType] = useState("addRoom");

  const getRoomCondition = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        const { temp, humidity } = response.data.main;
        const celciusWeather = Math.round(temp - 273);
        setRoomCondition({
          temp: celciusWeather,
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
        }}
      >
        <Modal />
        <Router />
      </RootContext.Provider>
    </>
  );
};

export default Root;
