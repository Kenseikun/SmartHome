import React, { useContext } from "react";
import RootContext from "../context";

const SingleRoom = () => {
  const context = useContext(RootContext);
  const { selectedRoom } = context;

  return (
    <div>
      <h2>{selectedRoom.roomName}</h2>
    </div>
  );
};

export default SingleRoom;
