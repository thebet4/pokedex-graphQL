import { gql } from '@apollo/client'

export const GET_POKEMONS = () => gql`
  query Pokemons($limit: Int!, $offset: Int!, $name: String!) {
    pokemons: pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: { name: { _similar: $name } }
    ) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
    }
    pagination: pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    }
  }
`
