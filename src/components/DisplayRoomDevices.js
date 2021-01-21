import React, { useContext } from "react";
import RootContext from "../context";
import { DeleteForever } from "@material-ui/icons";
import { IconButton, Tooltip } from "@material-ui/core";

const DisplayRoomDevices = () => {
  const context = useContext(RootContext);
  const { selectedRoom, deleteRoomDevice } = context;
  return (
    <>
      <ul>
        {selectedRoom.devices.map((device) => {
          const { deviceId, deviceIcon, deviceName, deviceOption } = device;
          const { optionValue, optionName, optionSymbol } = deviceOption;
          return (
            <li key={deviceId} style={{ color: "black" }}>
              <img
                style={{ width: "50px" }}
                src={deviceIcon}
                alt="device icon"
              />
              <p>{deviceName}</p>
              <p>
                {optionValue} {optionSymbol} {optionName}
              </p>
              <Tooltip title="Add new room">
                <IconButton onClick={() => deleteRoomDevice(deviceId)}>
                  <DeleteForever />
                </IconButton>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DisplayRoomDevices;
