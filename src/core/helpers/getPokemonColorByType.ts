const getPokemonColorByType = (type: string) => {
  const getPokemonColorByType: Record<string, string> = {
    normal: '#A8A77A',
    fighting: '#C22E28',
    flying: '#A98FF3',
    poison: '#A33EA1',
    ground: '#E2BF65',
    rock: '#B6A136',
    bug: '#48D0B0',
    ghost: '#735797',
    steel: '#B7B7CE',
    fire: '#FB6C6C',
    water: '#77BDFE',
    grass: '#48D0B0',
    electric: '#F7D02C',
    psychic: '#F95587',
    ice: '#96D9D6',
    dragon: '#6F35FC',
    dark: '#705746',
    fairy: '#D685AD',
    unknown: '#68A090',
    shadow: '#000000',
    default: '#fff',
  }

  return getPokemonColorByType[type] || getPokemonColorByType['default']
}

export default getPokemonColorByType
