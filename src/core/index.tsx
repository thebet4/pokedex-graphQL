import { ApolloProvider } from '@apollo/client'
import client from '@config/ApolloClient'
import { NavigationContainer } from '@react-navigation/native'
import Routes from '@routes/index'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PokemonContextPorvider from '@core/context/Pokemon'

const Core = () => {
  return (
    <ApolloProvider client={client}>
      <PokemonContextPorvider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <Routes />
          </SafeAreaView>
        </NavigationContainer>
      </PokemonContextPorvider>
    </ApolloProvider>
  )
}

export default Core
