import { colors } from '@config/theme'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container } from './styles'

const ListFooter = (isLoading: boolean) => {
  if (!isLoading) return null

  return (
    <Container>
      <ActivityIndicator size='large' color={colors.purple[200]} />
    </Container>
  )
}

export default ListFooter
