import Container from '@layout/components/atoms/Container'
import Title from '@layout/components/atoms/Title'
import Header from '@layout/components/molecules/Header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '@routes/AppRoutes'
import React, { useContext, useEffect, useState } from 'react'
import { Wrapper } from './styles'
import PokemonList from '@layout/components/templates/PokemonList'
import { PokemonContext } from '@core/context/Pokemon'
import { useQuery } from '@apollo/client'
import { Pagination, Pokemon } from '@core/models/pokemon'
import { GET_POKEMONS } from '@core/services/queries/pokemon'

const Home = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList, 'Home'>) => {
  const { pokemons, setPokemons } = useContext(PokemonContext)
  const [pokemonName, setPokemonName] = useState('')
  const [pagination, setPagination] = useState({
    limit: 20,
    offset: 0,
    count: 0,
  })

  const { data, loading, fetchMore } = useQuery<{
    pokemons: Pokemon[]
    pagination: Pagination
  }>(GET_POKEMONS(), {
    variables: {
      offset: pagination.offset,
      limit: pagination.limit,
      name: `%${pokemonName}%`,
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  })

  useEffect(() => {
    if (data?.pokemons) {
      console.log('PAG>>', pagination)
      setPokemons([...pokemons, ...data.pokemons])
      setPagination((prev) => {
        return {
          ...prev,
          offset: prev.offset + prev.limit,
          count: data.pagination.aggregate.count,
        }
      })
    }
  }, [data])

  const loadMorePokemons = async () => {
    if (loading || pagination.offset < pagination.count) return
    await fetchMore({
      variables: {
        offset: pagination.offset,
        limit: pagination.limit,
        name: `%${pokemonName}%`,
      },
    })
  }

  const searchPokemon = async (term: string) => {
    console.log(term)
    setPokemonName(term)
    if (loading) return
    await fetchMore({
      variables: {
        offset: 0,
        limit: pagination.limit,
        name: `%${term}%`,
      },
    })
  }

  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>More than 250 Pokemons for you to choose your favorite</Title>

        <PokemonList
          onSearch={searchPokemon}
          data={pokemons}
          isLoading={loading}
          loadMore={loadMorePokemons}
        />
      </Container>
    </Wrapper>
  )
}

export default Home
