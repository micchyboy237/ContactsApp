import React from 'react'
import styled from 'styled-components'
import Text from './Normal'
import { moderateScale } from 'react-native-size-matters/extend'

const SmallContainer = styled(Text)`
  fontSize: ${moderateScale(10)}px;
`

const Small = props => {
  return (
    <SmallContainer
      {...props}
    />
  )
}

export default Small
