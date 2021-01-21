import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { devices } from "../data";
import RootContext from "../context";
import { Button, Tooltip } from "@material-ui/core";
import { StyledAddButton, StyledCloseButton } from "./styles/StyledAddForms";
import { Clear } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddDeviceForm = () => {
  const classes = useStyles();
  const context = useContext(RootContext);
  const {
    selectedDeviceName,
    handleSelectedDeviceChange,
    addNewDeviceToRoom,
    setAddRoomModalClose,
  } = context;

  return (
    <>
      <h2>Add new device</h2>
      <form onSubmit={addNewDeviceToRoom}>
        <Tooltip title="close">
          <StyledCloseButton onClick={setAddRoomModalClose}>
            <Clear fontSize="large"></Clear>
          </StyledCloseButton>
        </Tooltip>
        <FormControl className={classes.formControl}>
          <InputLabel id="chooseDeviceSelect">Choose device</InputLabel>
          <Select
            labelId="chooseDeviceSelect"
            id="chooseDeviceSelect"
            value={selectedDeviceName}
            onChange={handleSelectedDeviceChange}
            required
          >
            {devices.map(({ deviceName }) => (
              <MenuItem value={deviceName}>{deviceName}</MenuItem>
            ))}
          </Select>
          <StyledAddButton variant="contained" type="submit">
            Add device
          </StyledAddButton>
        </FormControl>
      </form>
    </>
  );
};

export default AddDeviceForm;
