import React, { useContext } from "react";
import AppHeader from "../components/moleculs/AppHeader";
import RootContext from "../context";
import DisplayConditions from "../components/moleculs/DisplayConditions";
import DisplayRoomDevices from "../components/DisplayRoomDevices";
import arrowIcon from "../assets/icons/arrow.svg";
import Alert from "../components/Alert";

const SingleRoom = () => {
  const context = useContext(RootContext);
  const { selectedRoom } = context;

  const { roomName, familyMembers } = selectedRoom;

  return (
    <>
      <AppHeader
        icon={arrowIcon}
        title={roomName}
        content={`${familyMembers} family ${
          familyMembers === 1 ? "member" : "members"
        } have access`}
      />
      <DisplayConditions />
      <DisplayRoomDevices />
      <Alert />
    </>
  );
};

export default SingleRoom;
