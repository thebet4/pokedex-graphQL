import { colors } from '@config/theme'
import styled from 'styled-components/native'

export const BackgroundCircle = styled.View`
  width: 113px;
  height: 113px;
  justify-content: center;
  align-items: center;
  border-radius: 113px;
  background-color: ${colors.base[100]};
  opacity: 0.2;
  position: absolute;
  top: 13px;
`

export const PokemonImage = styled.Image`
  margin-top: 13px;
  width: 113px;
  height: 113px;
`
