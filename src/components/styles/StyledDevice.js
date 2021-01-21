import styled from "styled-components";
import { DeleteForever } from "@material-ui/icons";

export const StyledDeviceWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  background-color: white;
  border-radius: 10px;
  width: 90%;
  padding: 20px 15px;
  color: black;
`;

export const StyledImage = styled.img`
  width: 45px;
`;

export const StyledDeviceDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledDeviceName = styled.p`
  font-weight: 800;
`;

export const StyledDeviceValue = styled.p`
  font-size: 0.8rem;
  color: gray;
`;

export const StyledTrashIcon = styled(DeleteForever)`
  color: tomato;
`;
