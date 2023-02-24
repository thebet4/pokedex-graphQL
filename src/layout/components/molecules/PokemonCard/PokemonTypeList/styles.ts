import { colors } from '@config/theme'
import getPokemonColorByType from '@core/helpers/getPokemonColorByType'
import getDarkenColor from '@core/helpers/getaDarkenColor'
import { Regular } from '@layout/components/atoms/RegularText/styles'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  margin-top: 7px;
`

interface TypeContainerProps {
  type: string
}

export const TypeContainer = styled.View<TypeContainerProps>`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 2px 10px;
  margin-right: 1.5px;
  margin-left: 1.5px;
  background-color: ${({ type }) =>
    getDarkenColor(getPokemonColorByType(type), -0.1)};
`

export const TypeText = styled(Regular)`
  font-size: 12px;
  line-height: 15px;
  color: ${colors.base[100]};
`
