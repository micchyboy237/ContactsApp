import React from 'react'
import { View } from '../../../Components/Layout'
import SvgIcon from '../../../Components/SvgIcon'
import { Image } from '../../../Components/Media'
import { Metrics } from '../../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'


const HeaderRight = () => {
  const iconSize = moderateScale(22)

  return (
    <View 
    justifyCenter
    alignCenter
    style={{
      paddingHorizontal: Metrics.spaceHorizontal
    }}>
      
      <Image 
        resizeMode="contain"
        width={moderateScale(36)}
        height='100%'
        source={{uri: 'http://164.90.176.194:3000/assets/logo.png'}}
      />
    </View>
  )
}

export default HeaderRight
