import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledRoomWrapper = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  background-color: #fff;
  width: 45vw;
  height: 30vh;
  list-style: none;
  padding: 15px;
  border-radius: 20px;
  text-decoration: none;
`;

export const StyledRoomName = styled.h2`
  color: #000;
  font-size: 1.2rem;
`;

export const StyledFamilyMembersText = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 0.8rem;
`;

export const StyledDevicesNumberText = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-weight: 500;
  margin: 5px 0;
`;
