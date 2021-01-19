import React from "react";
import Switch from "@material-ui/core/Switch";
import { RoomWrapper } from "./styles/StyledRoom";

const Room = ({ id, name, familyMembers, devices, isDevicesActive }) => {
  return (
    <RoomWrapper key={id}>
      <h2>{name}</h2>
      <p>
        {familyMembers} family {familyMembers === 1 ? "member" : "members"} have
        access
      </p>
      <p>
        {devices} {devices === 1 ? "Device" : "Devices"}
      </p>
      <Switch
        checked={isDevicesActive}
        // onChange=""
        name="roomDevicesToggler"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </RoomWrapper>
  );
};

export default Room;
