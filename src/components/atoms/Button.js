import React from "react";
import { Tooltip, Button } from "@material-ui/core";

const Button = () => {
  return (
    <Tooltip title="close">
      <Button className={classes.closeButton} onClick={setAddRoomModalClose}>
        <Clear fontSize="large"></Clear>
      </Button>
    </Tooltip>
  );
};

export default Button;
