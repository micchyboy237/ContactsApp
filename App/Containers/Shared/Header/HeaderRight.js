import React from 'react'
import { View } from '../../../Components/Layout'
import SvgIcon from '../../../Components/SvgIcon'
import { Metrics } from '../../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'


const HeaderRight = () => {
  const iconSize = moderateScale(22)

  return (
    <View 
    justifyCenter
    alignCenter
    style={{
      height: 40,
      paddingHorizontal: Metrics.spaceHorizontal
    }}>
      
      {/* <SvgIcon name="Plus" width={iconSize} height={iconSize}/> */}
    </View>
  )
}

export default HeaderRight
