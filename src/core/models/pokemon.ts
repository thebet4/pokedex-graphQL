export type Pokemon = {
  id: string
  name: string
  types: PokemonType[]
  sprites: PokemonSprite[]
}

export type Pagination = {
  aggregate: { count: number }
}

export type PokemonType = {
  type: {
    name:
      | 'normal'
      | 'fighting'
      | 'flying'
      | 'poison'
      | 'ground'
      | 'rock'
      | 'bug'
      | 'ghost'
      | 'steel'
      | 'fire'
      | 'water'
      | 'grass'
      | 'electric'
      | 'psychic'
      | 'ice'
      | 'dragon'
      | 'dark'
      | 'fairy'
      | 'unknown'
      | 'shadow'
  }
}

type PokemonSprite = {
  sprites: string
}
