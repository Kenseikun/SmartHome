import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RootContext from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AddRoomForm = () => {
  const classes = useStyles();
  const context = useContext(RootContext);
  const { addNewRoom } = context;
  return (
    <form className={classes.root} onSubmit={addNewRoom}>
      <TextField id="roomName" type="text" name="roomName" label="Room name" />
      <TextField
        id="familyMembers"
        type="number"
        name="familyMembers"
        label="Family Members"
      />
      <Button variant="contained" color="primary" type="submit">
        Add room
      </Button>
    </form>
  );
};

export default AddRoomForm;
