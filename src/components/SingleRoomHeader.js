import React, { useContext } from "react";
import RootContext from "../context";

const SingleRoomHeader = () => {
  const context = useContext(RootContext);
  const { roomCondition } = context;
  return <div></div>;
};

export default SingleRoomHeader;
