import React from 'react'
import {
  ActivityIndicator
} from 'react-native'
import styled from 'styled-components'
import { Colors } from '../../Themes'
import { Label } from '../../Components/Text'
import { moderateScale } from 'react-native-size-matters/extend'

const ButtonContainer = styled.TouchableHighlight`
  backgroundColor: ${Colors.purple};
  borderRadius: 10px;
  width: 100%;
  height: ${moderateScale(48, 0.3)}px;
  justifyContent: center;
  alignItems: center;  
`

const Button = props => {
  const { isLoading, style, disabled, label, labelStyle, ...allProps } = props

  return (
    <ButtonContainer
      disabled={isLoading || disabled}
      style={[
        style,
        disabled && {
          opacity: 0.5
        }
      ]}
      {...allProps}
    >
      <>
        {
          !isLoading && !!label &&
            <Label style={labelStyle} weight='bold'>{label}</Label>
        }
        {
          isLoading &&
            <ActivityIndicator
              color='white' size='small'
            />
        }
      </>
    </ButtonContainer>
  )
}

Button.defaultProps = {
  labelStyle: {
    color: Colors.white,
    letterSpacing: 1.4
  },
  underlayColor: Colors.darkPurple,
  disabled: false
}

export default Button
