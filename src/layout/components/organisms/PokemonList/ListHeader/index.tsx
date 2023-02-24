import React from 'react'
import { Container, Input, SearchButtom } from './styles'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { colors } from '@config/theme'

interface IListHeaderProps {
  onSearch: (text: string) => void
}

const ListHeader = ({ onSearch }: IListHeaderProps) => {
  const [text, setText] = React.useState<string>('')

  return (
    <Container>
      <MaterialIcons name='search' size={24} color={colors.purple[100]} />

      <Input
        placeholder='Search Pokémon'
        onChangeText={(text) => setText(text)}
        value={text}
      />

      <SearchButtom onPress={() => onSearch(text.toLocaleLowerCase())}>
        <Feather name='arrow-right' size={14} color={colors.base[100]} />
      </SearchButtom>
    </Container>
  )
}

export default ListHeader
