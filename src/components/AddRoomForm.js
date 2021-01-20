import React, { useContext } from "react";
import { Button, TextField, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RootContext from "../context";
import { Clear } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "90%",
      margin: "20px auto",
    },
  },
  addButton: {
    width: "50%",
    margin: "20px auto",
    backgroundColor: "#F8833F",
  },
  closeButton: {
    width: "10px",
    color: "tomato",
    fontSize: "large",
    position: "absolute",
    top: "0",
    right: "0px",
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
          <Button
            className={classes.closeButton}
            onClick={setAddRoomModalClose}
          >
            <Clear fontSize="large"></Clear>
          </Button>
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
        <Button
          className={classes.addButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add
        </Button>
      </form>
    </>
  );
};

export default AddRoomForm;
