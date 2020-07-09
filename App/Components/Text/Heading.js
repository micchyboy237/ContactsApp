import React from 'react'
import styled from 'styled-components'
import Text from './Normal'
import { moderateScale } from 'react-native-size-matters/extend'

const HeadingContainer = styled(Text)`
  fontSize: ${moderateScale(28)}px;
  marginBottom: 8px;
`

const Heading = props => {
  return (
    <HeadingContainer
      weight='bold'
      {...props}
    />
  )
}

export default Heading
