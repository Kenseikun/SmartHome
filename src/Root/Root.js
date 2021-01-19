import React, { useState } from "react";
import RootContext from "../context";
import { initialRoomData } from "../data";
import Router from "../routing/Router";

const Root = () => {
  const [roomsList, setRoomsList] = useState(initialRoomData);
  const [isAddRoomModal, setIsAddRoomModal] = useState(false);

  const setAddRoomModalOpen = () => {
    setIsAddRoomModal(true);
  };

  const setAddRoomModalClose = () => {
    setIsAddRoomModal(false);
  };

  return (
    <>
      <RootContext.Provider
        value={{
          roomsList,
          isAddRoomModal,
          setAddRoomModalOpen,
          setAddRoomModalClose,
        }}
      >
        <Router />
      </RootContext.Provider>
    </>
  );
};

export default Root;
