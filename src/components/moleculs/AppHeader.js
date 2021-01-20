import React, { useContext } from "react";
import RootContext from "../../context";
import { routes } from "../../routes";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import {
  StyledHeaderWrapper,
  StyledLink,
  StyledPersonWrapper,
  StyledPersonName,
  StyledWelcomeText,
} from "../styles/StyledHeader";
import { AddIcon } from "../styles/StyledAppHeader";
import AppHeaderConditions from "./AppHeaderConditions";

const AppHeader = ({ title, content, icon, inRooms }) => {
  const context = useContext(RootContext);
  const { setAddRoomModalOpen, modalTypeChange } = context;
  return (
    <StyledHeaderWrapper>
      <StyledPersonWrapper>
        <StyledLink
          to={routes.home}
          inRooms={inRooms}
          onClick={() => modalTypeChange("addRoom")}
        >
          {icon}
        </StyledLink>
        <StyledPersonName>{title}</StyledPersonName>
        <StyledWelcomeText>{content}</StyledWelcomeText>
      </StyledPersonWrapper>
      <Tooltip title="Add new room">
        <IconButton onClick={setAddRoomModalOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    </StyledHeaderWrapper>
  );
};

export default AppHeader;
