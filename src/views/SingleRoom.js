import React, { useContext } from "react";
import AppHeader from "../components/moleculs/AppHeader";
import RootContext from "../context";
import { ArrowBack } from "@material-ui/icons";

const SingleRoom = () => {
  const context = useContext(RootContext);
  const { selectedRoom } = context;

  const { roomName, familyMembers } = selectedRoom;

  return (
    <>
      <AppHeader
        icon={<ArrowBack />}
        title={roomName}
        content={`${familyMembers} family ${
          familyMembers === 1 ? "member" : "members"
        } have access`}
      />
    </>
  );
};

export default SingleRoom;
