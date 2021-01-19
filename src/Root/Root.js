import React, { useState } from "react";
import RootContext from "../context";
import Router from "../routing/Router";
import { initialRoomData } from "../data";
import { v4 as uuidv4 } from "uuid";

const Root = () => {
  const [roomsList, setRoomsList] = useState(initialRoomData);
  const [isAddRoomModal, setIsAddRoomModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

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
        }}
      >
        <Router />
      </RootContext.Provider>
    </>
  );
};

export default Root;
