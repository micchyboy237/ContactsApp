import React from 'react'
import { View } from '../../Components/Layout'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { ApplicationStyles } from '../../Themes'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/stack'

const Container = props => {
  const { style, noInset, ...allProps } = props
  const insets = useSafeAreaInsets()
  const headerHeight = useHeaderHeight()

  const bottomInset = !noInset ? insets.bottom : 0

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight - bottomInset}
      behavior={Platform.select({
        ios: 'padding'
      })}
      style={[
        ApplicationStyles.mainContainer,
        style
      ]}
    >
      <View
        isFlex
        style={{
          paddingBottom: bottomInset
        }}
        {...allProps}
      />
    </KeyboardAvoidingView>
  )
}

export default Container
