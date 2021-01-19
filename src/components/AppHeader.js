import React, { useContext } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import RootContext from "../context";

const AppHeader = () => {
  const context = useContext(RootContext);
  const { setAddRoomModalOpen } = context;
  return (
    <div>
      <div>
        <h2>Hi Samuel</h2>
        <p>Welcome to Home</p>
      </div>
      <Tooltip title="Add new room">
        <IconButton onClick={setAddRoomModalOpen}>
          <AddCircleOutlinedIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default AppHeader;
