import React from 'react'
import styled from 'styled-components'
import Text from './Normal'
import { moderateScale } from 'react-native-size-matters/extend'

const SubHeadingContainer = styled(Text)`
  fontSize: ${moderateScale(16)}px;
  marginBottom: ${moderateScale(26)}px;
`

const SubHeading = props => {
  return (
    <SubHeadingContainer
      {...props}
    />
  )
}

export default SubHeading
