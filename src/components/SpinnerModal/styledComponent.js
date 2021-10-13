import styled from "styled-components/native";
import { colors } from "../../library/constants";

export const ModalContainer = styled.View`
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalBackground = styled.View`
  background-color: ${colors.darkLead};
  border-radius: 10;
  height: 20%;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20;
`;
export const ModalText = styled.Text`
  color: ${colors.blue_c};
  font-weight: bold;
  font-size: 18;
  letter-spacing: 1;
`;

export const ModalIcon = styled.View`
  font-size: 55;
  color: ${colors.blue_c};
  margin-bottom: 10;
`;
