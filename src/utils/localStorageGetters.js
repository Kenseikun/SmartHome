export const getRoomListFromLocalStorage = () => {
  let localStorageRoomList;

  if (localStorage.getItem("roomList")) {
    localStorageRoomList = JSON.parse(localStorage.getItem("roomList"));
  } else {
    localStorageRoomList = [];
  }

  return localStorageRoomList;
};

export const getSelectedRoomListFromLocalStorage = () => {
  let localStorageSelectedRoomList;

  if (localStorage.getItem("selectedRoom")) {
    localStorageSelectedRoomList = JSON.parse(
      localStorage.getItem("selectedRoom")
    );
  } else {
    localStorageSelectedRoomList = null;
  }

  return localStorageSelectedRoomList;
};
