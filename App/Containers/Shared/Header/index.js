import React from 'react'
import { View } from '../../../Components/Layout'
import { Colors, Metrics } from '../../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'
import styled from 'styled-components'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ApplicationStyles } from '../../../Themes'

const HeaderContainer = styled(View)`
  backgroundColor: ${Colors.white};
`

const Header = () => {
  const insets = useSafeAreaInsets()

  return (
    <HeaderContainer
      row
      justifyBetween
      alignCenter
      style={{        
        paddingTop: insets.top,
        // marginBottom: moderateScale(8),
        height: insets.top + moderateScale(70),
        ...ApplicationStyles.panelHeader
      }}
    >
      <HeaderLeft />
      <HeaderRight />      
    </HeaderContainer>
  )
}

export default Header
