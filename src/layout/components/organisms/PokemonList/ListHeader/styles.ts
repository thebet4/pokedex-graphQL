import { colors } from '@config/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border-color: ${colors.purple[100]}
    border-width: 1px;
    flex-direction: row;
    align-items: center;
    padding: 8px 10px;
`

export const Input = styled.TextInput`
  flex: 1;
  font-size: 14px;
  font-family: 'Inter_400Regular';
  line-height: 17px;
`
export const SearchButtom = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${colors.purple[100]};
  align-items: center;
  justify-content: center;
`
