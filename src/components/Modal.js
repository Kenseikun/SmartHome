import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal as MaterialModal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RootContext from "../context";
import AddRoomForm from "./AddRoomForm";
import { StyledModalContent } from "./styles/StyledAddRoomModal";
import AddDeviceForm from "./AddDeviceForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
}));

const Modal = () => {
  const classes = useStyles();
  const context = useContext(RootContext);
  const { isAddRoomModal, setAddRoomModalClose, modalType } = context;

  return (
    <MaterialModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isAddRoomModal}
      onClose={setAddRoomModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isAddRoomModal}>
        <StyledModalContent className={classes.paper}>
          {modalType === "addRoom" ? <AddRoomForm /> : <AddDeviceForm />}
        </StyledModalContent>
      </Fade>
    </MaterialModal>
  );
};

export default Modal;
