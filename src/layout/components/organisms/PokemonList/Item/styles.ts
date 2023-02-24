import { colors } from '@config/theme'
import getPokemonColorByType from '@core/helpers/getPokemonColorByType'
import styled from 'styled-components/native'

interface IPokemonCardProps {
  type: string
}

export const Card = styled.View<IPokemonCardProps>`
  flex: 1;
  height: 189px;
  margin-top: 23px;
  margin-left: 5px
  margin-right: 5px
  align-items: center;
  background-color: ${(props) => getPokemonColorByType(props.type)};
  border-radius: 15px;
`
