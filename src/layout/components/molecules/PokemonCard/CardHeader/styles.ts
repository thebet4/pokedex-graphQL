import { colors } from '@config/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 49px;
  height: 17px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  top: -8.5px;

  background-color: ${colors.yellow[200]};
`
