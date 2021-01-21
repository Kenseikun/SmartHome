import React, { useContext } from "react";
import RootContext from "../context";
import { IconButton, Switch, Tooltip } from "@material-ui/core";

import {
  StyledDisplayRoomUl,
  StyledDeviceWrapper,
  StyledImage,
  StyledDeviceDetailsWrapper,
  StyledDeviceName,
  StyledDeviceValue,
  StyledTrashIcon,
} from "./styles/StyledDisplayRoomDevices";

const DisplayRoomDevices = () => {
  const context = useContext(RootContext);
  const {
    selectedRoom,
    toggleRoomSingleDeviceActive,
    handleDeviceOptionValueChange,
    handleAlertOpen,
  } = context;

  return (
    <>
      <StyledDisplayRoomUl>
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
                  {optionValue} {optionSymbol} {optionName}
                </StyledDeviceValue>
                <input
                  type="range"
                  value={optionValue}
                  onChange={(e) => handleDeviceOptionValueChange(deviceId, e)}
                />
              </StyledDeviceDetailsWrapper>
              <Tooltip title="remove this device">
                <IconButton onClick={() => handleAlertOpen(deviceId)}>
                  <StyledTrashIcon />
                </IconButton>
              </Tooltip>
              <Switch
                checked={isdeviceActive}
                onChange={() => toggleRoomSingleDeviceActive(deviceId)}
                name="deviceToggler"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </StyledDeviceWrapper>
          );
        })}
      </StyledDisplayRoomUl>
    </>
  );
};

export default DisplayRoomDevices;
