import styled from "styled-components";

export const StyledConditionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 0 0 40px 40px;
`;
