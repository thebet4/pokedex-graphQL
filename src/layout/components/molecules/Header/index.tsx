import React from "react";
import { BackButtonContainer, Container } from "./styles";
import Logo from "@layout/components/atoms/Logo";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@config/theme";
import { AppStackParamList } from "@routes/AppRoutes";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface IHeaderProps {
  hasBackButton?: boolean;
}

const Header = ({ hasBackButton }: IHeaderProps = { hasBackButton: false }) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  return (
    <Container>
      {hasBackButton && (
        <BackButtonContainer
          onPress={() => {
            if (navigation.canGoBack()) navigation.goBack();
          }}
        >
          <MaterialIcons name="arrow-back" size={24} color={colors.base[100]} />
        </BackButtonContainer>
      )}
      <Logo />
    </Container>
  );
};

export default Header;
