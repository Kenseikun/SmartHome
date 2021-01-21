import React from "react";
import {
  StyledDeviceWrapper,
  StyledImage,
  StyledDeviceDetailsWrapper,
  StyledDeviceName,
  StyledDeviceValue,
  StyledTrashIcon,
} from "./styles/StyledDevice";

const Device = () => {
  return (
    <StyledDeviceWrapper key={deviceId}>
      <StyledImage src={deviceIcon} alt="device icon" />
      <StyledDeviceDetailsWrapper>
        <StyledDeviceName>{deviceName}</StyledDeviceName>
        <StyledDeviceValue>
          {optionValue} {optionSymbol}{" "}
          {optionName === "Temperature" ? "C" : null} {optionName}
        </StyledDeviceValue>
        <input type="range" id="volume" name="slider" min="0" max="100"></input>
      </StyledDeviceDetailsWrapper>
      <Tooltip title="remove this device">
        <IconButton onClick={() => deleteRoomDevice(deviceId)}>
          <StyledTrashIcon />
        </IconButton>
      </Tooltip>
      <Switch
        checked={isdeviceActive}
        // onChange=""
        name="deviceToggler"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </StyledDeviceWrapper>
  );
};

export default Device;
