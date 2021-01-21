import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import RootContext from "../context";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Alert = () => {
  const context = useContext(RootContext);

  const { isAlertOpen, handleAlertClose, deleteRoomDevice } = context;

  return (
    <Dialog
      open={isAlertOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleAlertClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"Are you sure you want to delete?"}
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleAlertClose} color="primary">
          No
        </Button>
        <Button
          onClick={() => {
            deleteRoomDevice();
            handleAlertClose();
          }}
          color="secondary"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alert;
