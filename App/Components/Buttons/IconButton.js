import React from 'react'
import styled from 'styled-components'
import SvgIcon from '../../Components/SvgIcon'
import { moderateScale } from 'react-native-size-matters/extend'

const IconButtonContainer = styled.TouchableOpacity`
  paddingHorizontal: ${moderateScale(16)}px;
  height: ${moderateScale(40)}px;
  justifyContent: center;
  alignItems: center;  
`

const IconButton = props => {
  const { iconSize, icon, ...allProps } = props
  const iconDimsSize = moderateScale(Number(iconSize))

  return (
    <IconButtonContainer
      {...allProps}
    >
      <SvgIcon name={icon} width={iconDimsSize} height={iconDimsSize} />
    </IconButtonContainer>
  )
}

IconButton.defaultProps = {
  iconSize: 18
}

export default IconButton
