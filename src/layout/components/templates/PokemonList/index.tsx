import { Pokemon } from '@core/models/pokemon'
import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { Container } from './styles'
import PokemonCard from '@layout/components/organisms/PokemonList/Item'
import ListFooter from '@layout/components/organisms/PokemonList/ListFooter'
import ListHeader from '@layout/components/organisms/PokemonList/ListHeader'

interface IPokemonListProps {
  data: Pokemon[]
  isLoading?: boolean
  loadMore: () => Promise<void>
  onSearch: (text: string) => void
}

const PokemonList = ({
  data,
  isLoading = false,
  loadMore,
  onSearch,
}: IPokemonListProps) => {
  const renderItem = ({ item }: ListRenderItemInfo<Pokemon>) => {
    return <PokemonCard {...item} />
  }

  const renderHeader = () => {
    return <ListHeader onSearch={onSearch} />
  }

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        keyExtractor={(item: Pokemon) => item.id}
        onEndReachedThreshold={0.05}
        onEndReached={loadMore}
        ListFooterComponent={ListFooter(isLoading)}
      />
    </Container>
  )
}

export default PokemonList
