import styled from "styled-components";

export const StyledRoomList = styled.ul`
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  height: 80vh;
  width: 100vw;
  overflow: auto;
  padding: 10px;
`;
