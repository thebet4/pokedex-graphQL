import { Pokemon } from '@core/models/pokemon'
import React, { ReactNode } from 'react'

interface IPokemonContext {
  pokemons: Pokemon[]
  setPokemons: (pokemons: Pokemon[]) => void
}

const INITIAL_STATE: IPokemonContext = {
  pokemons: [],
  setPokemons: () => {},
}

export const PokemonContext =
  React.createContext<IPokemonContext>(INITIAL_STATE)

interface IPokemonContextPorviderProps {
  children: ReactNode
}

const PokemonContextPorvider = ({ children }: IPokemonContextPorviderProps) => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([])

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContextPorvider
