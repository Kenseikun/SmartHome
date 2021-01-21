import React, { useContext } from "react";
import RootContext from "../context";
import {
  IconButton,
  Slider,
  Switch,
  Tooltip,
  Typography,
} from "@material-ui/core";

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
  const {
    selectedRoom,
    deleteRoomDevice,
    toggleRoomSingleDeviceActive,
    handleDeviceOptionValueChange,
    handleAlertOpen,
  } = context;

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
                  {optionValue} {optionSymbol} {optionName}
                </StyledDeviceValue>

                {/* <Slider
                  value={optionValue}
                  color="secondary"
                  onChange={(e) => handleDeviceOptionValueChange(deviceId, e)}
                  aria-labelledby="continuous-slider"
                /> */}

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
      </ul>
    </>
  );
};

export default DisplayRoomDevices;
