import React from 'react'
import { View } from '../../../Components/Layout'
import { Colors, Metrics } from '../../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'
import styled from 'styled-components'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ApplicationStyles } from '../../../Themes'
import { HeaderBackButton } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

const HeaderContainer = styled(View)`
  backgroundColor: ${Colors.white};
`

const Header = props => {
  const navigation = useNavigation()
  const { headerTitle, allProps } = props
  const insets = useSafeAreaInsets()
  const canGoBack = navigation.canGoBack()

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
      {canGoBack && <HeaderBackButton onPress={() => navigation.goBack()} tintColor={Colors.gray} labelVisible={false} />}
      <HeaderLeft title={headerTitle} />
      <HeaderRight />
    </HeaderContainer>
  )
}

export default Header
