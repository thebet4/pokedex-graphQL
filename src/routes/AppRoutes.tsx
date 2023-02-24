import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '@layout/screens/Details'
import Home from '@layout/screens/Home'
import { colors } from '@config/theme'

export type AppStackParamList = {
  Home: undefined
  Details: undefined
}

const { Screen, Navigator } = createNativeStackNavigator<AppStackParamList>()

const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: colors.purple[200],
        animation: 'slide_from_right',
      }}
      initialRouteName='Home'
    >
      <Screen name='Home' component={Home} />
      <Screen name='Details' component={Details} />
    </Navigator>
  )
}

export default AppRoutes
