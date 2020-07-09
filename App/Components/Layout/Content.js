import React from 'react'
import View from './View'
import styled from 'styled-components'
import { Metrics } from '../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'

const ContentContainer = styled(View)`
  flex: 1;
  paddingHorizontal: ${moderateScale(Metrics.spaceHorizontalLg, 0.2)}px;
`

const Content = props => {
  return (
    <ContentContainer
      {...props}
    />
  )
}

export default Content
