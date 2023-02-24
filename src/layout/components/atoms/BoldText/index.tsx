import React, { ReactNode } from 'react'
import { TextStyle } from 'react-native'
import { Bold } from './styles'

interface ITitleProps {
  children: ReactNode
  props?: TextStyle
}

const BoldText = ({ children, props }: ITitleProps) => {
  return <Bold {...props}>{children}</Bold>
}

export default BoldText
