import { PokemonType } from '@core/models/pokemon'
import React from 'react'
import { Container, TypeContainer, TypeText } from './styles'

interface IPokemonTypeListProps {
  types: PokemonType[]
  pokemonId: string
}

const PokemonTypeList = ({ types, pokemonId }: IPokemonTypeListProps) => {
  return (
    <Container>
      {types.map((type, index) => (
        <TypeContainer type={types[0].type.name} key={`${pokemonId}${index}`}>
          <TypeText>{type.type.name}</TypeText>
        </TypeContainer>
      ))}
    </Container>
  )
}

export default PokemonTypeList
