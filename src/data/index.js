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
    deviceName: "Lamp",
    deviceIcon: lamp,
    deviceOption: {
      optionValue: 50,
      optionName: "Brightness",
      optionSymbol: "%",
      isdeviceActive: false,
    },
  },
  {
    deviceName: "TV",
    deviceIcon: tv,
    deviceOption: {
      optionValue: 50,
      optionName: "Volume",
      optionSymbol: "%",
      isdeviceActive: false,
    },
  },
  {
    deviceName: "Air Conditioner",
    deviceIcon: airConditioner,
    deviceOption: {
      optionValue: 24,
      optionName: "Temperature",
      optionSymbol: "°",
      isdeviceActive: false,
    },
  },
  {
    deviceName: "Fridge",
    deviceIcon: fridge,
    deviceOption: {
      optionValue: 5,
      optionName: "Temperature",
      optionSymbol: "°",
      isdeviceActive: false,
    },
  },
  // {
  //   deviceId: 5,
  //   deviceName: "Camera",
  //   deviceIcon: { camera },
  //   deviceOption: "",
  // },
];
