import React, { ReactNode } from 'react'
import { TextStyle } from 'react-native'
import { Regular } from './styles'

interface ITitleProps {
  children: ReactNode
  props?: TextStyle
}

const RegularText = ({ children, props }: ITitleProps) => {
  return <Regular {...props}>{children}</Regular>
}

export default RegularText
