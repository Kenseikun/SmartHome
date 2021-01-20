import React, { useContext } from "react";
import RootContext from "../context";
import Room from "./Room";
import { StyledRoomList } from "./styles/StyledRoomList";

const RoomList = () => {
  const context = useContext(RootContext);
  const { roomsList } = context;

  return (
    <StyledRoomList>
      {roomsList.map((room) => (
        <Room {...room} />
      ))}
    </StyledRoomList>
  );
};

export default RoomList;
