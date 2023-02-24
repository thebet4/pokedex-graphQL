import React, { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Wrapper } from "./styles";

interface IContainerProps {
  children: ReactNode;
  props?: ViewStyle;
}

const Container = ({ children, props }: IContainerProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Container;
