import React, { useContext } from "react";
import RootContext from "../context";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import { PersonPin } from "@material-ui/icons";
import {
  StyledHeaderWrapper,
  StyledPersonWrapper,
  StyledPersonName,
  StyledWelcomeText,
} from "../components/styles/StyledHeader";

const AppHeader = () => {
  const context = useContext(RootContext);
  const { setAddRoomModalOpen } = context;
  return (
    <StyledHeaderWrapper>
      <StyledPersonWrapper>
        <PersonPin />
        <StyledPersonName>Hi Samuel</StyledPersonName>
        <StyledWelcomeText>Welcome to Home</StyledWelcomeText>
      </StyledPersonWrapper>
      <Tooltip title="Add new room">
        <IconButton onClick={setAddRoomModalOpen}>
          <AddCircleOutlinedIcon />
        </IconButton>
      </Tooltip>
    </StyledHeaderWrapper>
  );
};

export default AppHeader;
