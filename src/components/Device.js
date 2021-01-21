import React from "react";

const Device = () => {
  return (
    <li key={deviceId} style={{ color: "black" }}>
      <img style={{ width: "50px" }} src={deviceIcon} alt="device icon" />
      <p>{deviceName}</p>
      <p>
        {optionValue} {optionSymbol} {optionName}
      </p>
      <Tooltip title="remove this device">
        <IconButton onClick={() => deleteRoomDevice(deviceId)}>
          <DeleteForever />
        </IconButton>
      </Tooltip>
      <Switch
        checked={isdeviceActive}
        // onChange=""
        name="deviceToggler"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </li>
  );
};

export default Device;
