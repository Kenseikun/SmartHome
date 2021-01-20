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
  const { selectRoom, getRoomCondition } = context;
  return (
    <StyledLink
      key={id}
      onClick={() => {
        selectRoom(id);
        getRoomCondition();
      }}
      to={`/room/${roomName.replace(/\s/g, "")}`}
    >
      <StyledRoomWrapper key={id}>
        <StyledRoomName>{roomName}</StyledRoomName>
        <StyledFamilyMembersText>
          {familyMembers} family {familyMembers === 1 ? "member" : "members"}{" "}
          have access
        </StyledFamilyMembersText>
        <StyledDevicesNumberText>
          {numberOfDevices} {numberOfDevices === 1 ? "Device" : "Devices"}
        </StyledDevicesNumberText>
        <Switch
          checked={isDevicesActive}
          // onChange=""
          name="roomDevicesToggler"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </StyledRoomWrapper>
    </StyledLink>
  );
};

export default Room;
