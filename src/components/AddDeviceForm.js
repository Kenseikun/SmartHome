import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { devices } from "../data";
import RootContext from "../context";
import { Button } from "@material-ui/core";

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
  } = context;

  return (
    <form onSubmit={addNewDeviceToRoom}>
      <FormControl className={classes.formControl}>
        <InputLabel id="chooseDeviceSelect">Choose device</InputLabel>
        <Select
          labelId="chooseDeviceSelect"
          id="chooseDeviceSelect"
          value={selectedDeviceName}
          onChange={handleSelectedDeviceChange}
        >
          {devices.map(({ deviceName }) => (
            <MenuItem value={deviceName}>{deviceName}</MenuItem>
          ))}
        </Select>
        <Button variant="contained" color="primary" type="submit">
          Add device
        </Button>
      </FormControl>
    </form>
  );
};

export default AddDeviceForm;
