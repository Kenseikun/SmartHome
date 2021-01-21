import React, { useContext } from "react";
import RootContext from "../context";
import Switch from "@material-ui/core/Switch";
import {
  StyledLink,
  StyledRoomWrapper,
  StyledRoomName,
  StyledFamilyMembersText,
  StyledDevicesNumberText,
} from "./styles/StyledRoom";

const Room = ({
  id,
  roomName,
  familyMembers,
  numberOfDevices,
  isDevicesActive,
}) => {
  const context = useContext(RootContext);
  const { selectRoom, getRoomCondition, toggleAllRoomDevicesActive } = context;

  return (
    <StyledRoomWrapper key={id}>
      <StyledLink
        key={id}
        onClick={() => {
          selectRoom(id);
          getRoomCondition();
        }}
        to={`/room/${roomName.replace(/\s/g, "")}`}
      >
        <StyledRoomName>{roomName}</StyledRoomName>
        <StyledFamilyMembersText>
          {familyMembers} family {familyMembers === 1 ? "member" : "members"}{" "}
          have access
        </StyledFamilyMembersText>
        <StyledDevicesNumberText>
          {numberOfDevices} {numberOfDevices === 1 ? "Device" : "Devices"}
        </StyledDevicesNumberText>
      </StyledLink>

      <Switch
        checked={isDevicesActive}
        onChange={() => toggleAllRoomDevicesActive(id)}
        name="roomDevicesToggler"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </StyledRoomWrapper>
  );
};

export default Room;
