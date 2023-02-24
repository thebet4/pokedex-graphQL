import { Pokemon } from '@core/models/pokemon'
import React from 'react'
import { Card } from './styles'
import CardHeader from '@layout/components/molecules/PokemonCard/CardHeader'
import CardImage from '@layout/components/molecules/PokemonCard/CardImage'
import BoldText from '@layout/components/atoms/BoldText'
import PokemonTypeList from '@layout/components/molecules/PokemonCard/PokemonTypeList'

const PokemonCard = (pokemon: Pokemon) => {
  return (
    <Card type={pokemon.types[0].type.name}>
      <CardHeader pokemonId={pokemon.id} />
      <CardImage pokemonId={pokemon.id} />
      <BoldText>{pokemon.name}</BoldText>
      <PokemonTypeList types={pokemon.types} pokemonId={pokemon.id} />
    </Card>
  )
}

export default PokemonCard
