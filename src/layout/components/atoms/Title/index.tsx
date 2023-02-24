import React, { ReactNode } from "react";
import { TextStyle } from "react-native";
import { TitleText } from "./styles";

interface ITitleProps {
  children: ReactNode;
  props?: TextStyle;
}

const Title = ({ children, props }: ITitleProps) => {
  return <TitleText {...props}>{children}</TitleText>;
};

export default Title;
