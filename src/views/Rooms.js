import React from "react";
import AddRoomModal from "../components/AddRoomModal";
import AppHeader from "../components/AppHeader";
import RoomList from "../components/RoomList";

const Rooms = () => {
  return (
    <>
      <AppHeader />
      <AddRoomModal />
      <RoomList />
    </>
  );
};

export default Rooms;
