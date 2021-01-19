import React, { useState } from "react";
import RootContext from "../context";
import { initialRoomData } from "../data";
import Router from "../routing/Router";

const Root = () => {
  const [roomsList, setRoomsList] = useState(initialRoomData);
  console.log(roomsList);

  return (
    <>
      <RootContext.Provider value={{ roomsList }}>
        <Router />
      </RootContext.Provider>
    </>
  );
};

export default Root;
