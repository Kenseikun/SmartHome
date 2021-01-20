import React from "react";
import AppHeader from "../components/moleculs/AppHeader";
import RoomList from "../components/RoomList";
import { PersonPin } from "@material-ui/icons";

const Rooms = () => {
  return (
    <>
      <AppHeader
        icon={<PersonPin />}
        title="Hi Samuel"
        content="Welcome to Home"
        inRooms
      />
      <RoomList />
    </>
  );
};

export default Rooms;
