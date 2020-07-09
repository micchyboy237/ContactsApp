import React from 'react'
import styled from 'styled-components'
import Text from './Normal'
import { moderateScale } from 'react-native-size-matters/extend'

const XSMALL = 9
const SMALL = 12
const MEDIUM = 14
const LARGE = 16

const getSize = props => {
  if (props.xsmall) {
    return XSMALL
  } else if (props.small) {
    return SMALL
  } else if(props.large) {
    return LARGE
  } else {
    return MEDIUM
  }
}

const LabelContainer = styled(Text)`
  fontSize: ${props => moderateScale(getSize(props), 0.3)}px;
`
// fontSize: ${props => moderateScale(!props.small ? 14 : 12, 0.3)}px;
const Label = props => {
  return (
    <LabelContainer
      {...props}
    />
  )
}

export default Label
