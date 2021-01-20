import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  ${({ inRooms }) => inRooms && css``}
`;

export const StyledPersonWrapper = styled.div``;
export const StyledPersonName = styled.h2``;
export const StyledWelcomeText = styled.p`
  font-weight: 300;
`;
