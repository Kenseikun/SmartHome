import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import { RoomWrapper } from "./styles/StyledRoom";
import { routes } from "../routes";
import RootContext from "../context";

const Room = ({
  id,
  roomName,
  familyMembers,
  numberOfDevices,
  isDevicesActive,
}) => {
  const context = useContext(RootContext);
  const { selectRoom } = context;
  return (
    <Link onClick={() => selectRoom(id)} to={`/room/${roomName}`}>
      <RoomWrapper key={id}>
        <h2>{roomName}</h2>
        <p>
          {familyMembers} family {familyMembers === 1 ? "member" : "members"}{" "}
          have access
        </p>
        <p>
          {numberOfDevices} {numberOfDevices === 1 ? "Device" : "Devices"}
        </p>
        <Switch
          checked={isDevicesActive}
          // onChange=""
          name="roomDevicesToggler"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </RoomWrapper>
    </Link>
  );
};

export default Room;
