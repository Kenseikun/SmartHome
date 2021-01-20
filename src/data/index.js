import airConditioner from "../assets/icons/airConditioner.svg";
import camera from "../assets/icons/camera.svg";
import fridge from "../assets/icons/fridge.svg";
import humidity from "../assets/icons/humidity.svg";
import lamp from "../assets/icons/lamp.svg";
import temperature from "../assets/icons/temperature.svg";
import tv from "../assets/icons/tv.svg";

export const initialRoomData = [
  {
    id: 1,
    roomName: "Living Room",
    familyMembers: 1,
    devices: [],
    numberOfDevices: 0,
    isDevicesActive: false,
  },
  {
    id: 2,
    roomName: "Bed Room",
    familyMembers: 2,
    devices: [],
    numberOfDevices: 0,
    isDevicesActive: true,
  },
  // {
  //   id: 3,
  //   roomName: "Bed Room",
  //   familyMembers: 2,
  //   devices: [],
  //   numberOfDevices: 0,
  //   isDevicesActive: true,
  // },
  // {
  //   id: 4,
  //   roomName: "Bed Room",
  //   familyMembers: 2,
  //   devices: [],
  //   numberOfDevices: 0,
  //   isDevicesActive: true,
  // },
  // {
  //   id: 5,
  //   roomName: "Bed Room",
  //   familyMembers: 2,
  //   devices: [],
  //   numberOfDevices: 0,
  //   isDevicesActive: true,
  // },
  // {
  //   id: 6,
  //   roomName: "Bed Room",
  //   familyMembers: 2,
  //   devices: [],
  //   numberOfDevices: 0,
  //   isDevicesActive: true,
  // },
];

export const devices = [
  {
    deviceId: 1,
    deviceName: "Lamp",
    deviceIcon: { lamp },
    deviceOption: "",
  },
  {
    deviceId: 2,
    deviceName: "TV",
    deviceIcon: { tv },
    deviceOption: "",
  },
  {
    deviceId: 3,
    deviceName: "Air Conditioner",
    deviceIcon: { airConditioner },
    deviceOption: "",
  },
  {
    deviceId: 4,
    deviceName: "Fridge",
    deviceIcon: { fridge },
    deviceOption: "",
  },
  {
    deviceId: 5,
    deviceName: "Fridge",
    deviceIcon: { camera },
    deviceOption: "",
  },
];
