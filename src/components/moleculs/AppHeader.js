import React, { useContext } from "react";
import RootContext from "../../context";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import {
  StyledHeaderWrapper,
  StyledPersonWrapper,
  StyledPersonName,
  StyledWelcomeText,
} from "../styles/StyledHeader";
import { routes } from "../../routes";

const AppHeader = ({ title, content, icon }) => {
  const context = useContext(RootContext);
  const { setAddRoomModalOpen, modalTypeChange } = context;
  return (
    <StyledHeaderWrapper>
      <StyledPersonWrapper>
        <Link to={routes.home} onClick={() => modalTypeChange("addRoom")}>
          {icon}
        </Link>
        <StyledPersonName>{title}</StyledPersonName>
        <StyledWelcomeText>{content}</StyledWelcomeText>
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
