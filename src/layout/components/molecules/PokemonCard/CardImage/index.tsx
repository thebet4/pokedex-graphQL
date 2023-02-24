import React from 'react'
import { BackgroundCircle, PokemonImage } from './styles'

const CardImage = ({ pokemonId }: { pokemonId: string }) => {
  return (
    <>
      <BackgroundCircle />
      <PokemonImage
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
        }}
      />
    </>
  )
}

export default CardImage
