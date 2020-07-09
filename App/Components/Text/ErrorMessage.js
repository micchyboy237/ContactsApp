import React from 'react'
import styled from 'styled-components'
import Text from './Normal'
import { Colors } from '../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'

const ErrorContainer = styled(Text)`
  color: ${Colors.error};
  fontSize: ${moderateScale(12)}px;
  marginTop: ${moderateScale(4)}px;
`

const Error = props => {
  const { children } = props

  if (!children) {
    return null
  }

  return (
    <ErrorContainer
      error
      {...props}
    />
  )
}

export default Error
