import { colors } from "@config/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 75px;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: ${colors.purple[200]};
`;

export const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
`;
