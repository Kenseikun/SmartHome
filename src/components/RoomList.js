import React, { useContext } from "react";
import RootContext from "../context";
import Room from "./Room";

const RoomList = () => {
  const context = useContext(RootContext);
  const { roomsList } = context;

  return (
    <ul>
      {roomsList.map((room) => (
        <Room {...room} />
      ))}
    </ul>
  );
};

export default RoomList;
