import React from "react";
import AppHeader from "../components/moleculs/AppHeader";
import RoomList from "../components/RoomList";
import userAvatar from "../assets/icons/woman.svg";

const Rooms = () => {
  return (
    <>
      <AppHeader
        icon={userAvatar}
        title="Hi Samuela"
        content="Welcome to Home"
        inRooms
      />
      <RoomList />
    </>
  );
};

export default Rooms;
