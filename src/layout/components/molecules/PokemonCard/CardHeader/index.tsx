import React from 'react'
import { Container } from './styles'
import RegularText from '@layout/components/atoms/RegularText'

const CardHeader = ({ pokemonId }: { pokemonId: string }) => {
  return (
    <Container>
      <RegularText>#{`${pokemonId + 1000}`.substring(1)}</RegularText>
    </Container>
  )
}

export default CardHeader
