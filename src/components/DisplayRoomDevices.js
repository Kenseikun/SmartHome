import React, { useContext } from "react";
import RootContext from "../context";
import { IconButton, Switch, Tooltip } from "@material-ui/core";

import {
  StyledDeviceWrapper,
  StyledImage,
  StyledDeviceDetailsWrapper,
  StyledDeviceName,
  StyledDeviceValue,
  StyledTrashIcon,
} from "./styles/StyledDevice";

const DisplayRoomDevices = () => {
  const context = useContext(RootContext);
  const { selectedRoom, deleteRoomDevice } = context;
  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {selectedRoom.devices.map((device) => {
          const { deviceId, deviceIcon, deviceName, deviceOption } = device;
          const {
            optionValue,
            optionName,
            optionSymbol,
            isdeviceActive,
          } = deviceOption;
          return (
            <StyledDeviceWrapper key={deviceId}>
              <StyledImage src={deviceIcon} alt="device icon" />
              <StyledDeviceDetailsWrapper>
                <StyledDeviceName>{deviceName}</StyledDeviceName>
                <StyledDeviceValue>
                  {optionValue} {optionSymbol}{" "}
                  {optionName === "Temperature" ? "C" : null} {optionName}
                </StyledDeviceValue>
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
        })}
      </ul>
    </>
  );
};

export default DisplayRoomDevices;
