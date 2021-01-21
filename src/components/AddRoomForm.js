import React, { useContext } from "react";
import { Button, TextField, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RootContext from "../context";
import { Clear } from "@material-ui/icons";
import { StyledAddButton, StyledCloseButton } from "./styles/StyledAddForms";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "90%",
      margin: "20px auto",
    },
  },
}));

const AddRoomForm = () => {
  const classes = useStyles();
  const context = useContext(RootContext);
  const { addNewRoom, setAddRoomModalClose } = context;
  return (
    <>
      <h2>Add new room</h2>
      <form className={classes.root} onSubmit={addNewRoom}>
        <Tooltip title="close">
          <StyledCloseButton onClick={setAddRoomModalClose}>
            <Clear fontSize="large"></Clear>
          </StyledCloseButton>
        </Tooltip>
        <TextField
          id="roomName"
          type="text"
          name="roomName"
          label="Room name"
          required
        />
        <TextField
          id="familyMembers"
          type="number"
          name="familyMembers"
          label="Family Members"
          required
        />
        <StyledAddButton variant="contained" type="submit">
          Add
        </StyledAddButton>
      </form>
    </>
  );
};

export default AddRoomForm;
