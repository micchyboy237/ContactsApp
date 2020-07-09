import React from 'react'
import { View } from '../../../Components/Layout'
import SvgIcon from '../../../Components/SvgIcon'
import { Image } from '../../../Components/Media'
import { Heading } from '../../../Components/Text'
import { Metrics } from '../../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'


const HeaderLeft = props => {
  const {title} = props
  const iconSize = moderateScale(22)

  return (
    <View 
    // justifyCenter
    row
    alignCenter
    style={{
      paddingHorizontal: Metrics.spaceHorizontal
    }}>
      <Heading style={{ marginBottom: 0 }} maxLength={2}>{title}</Heading>
    </View>
  )
}

export default HeaderLeft
