import React from 'react'
import { View } from '../../../Components/Layout'
import SvgIcon from '../../../Components/SvgIcon'
import { Image } from '../../../Components/Media'
import { Heading } from '../../../Components/Text'
import { Metrics } from '../../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'


const HeaderRight = () => {
  const iconSize = moderateScale(22)

  return (
    <View 
    // justifyCenter
    row
    alignCenter
    style={{
      height: 40,
      paddingHorizontal: Metrics.spaceHorizontal
    }}>
      <Image 
        resizeMode="contain"
        width={moderateScale(36)}
        height='100%'
        source={{uri: 'http://164.90.176.194:3000/assets/logo.png'}}
      />
      <Heading style={{ marginBottom: 0, marginLeft: Metrics.spaceHorizontal }}>Contacts</Heading>
    </View>
  )
}

export default HeaderRight
