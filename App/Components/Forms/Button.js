import React from 'react'
import styled from 'styled-components'
import { Colors, ApplicationStyles } from '../../Themes'
import { Label } from '../../Components/Text'
import { moderateScale } from 'react-native-size-matters/extend'

const { height } = ApplicationStyles.formRow
export const BUTTON_HEIGHT = moderateScale(height, 0.3)

const ButtonContainer = styled.TouchableHighlight`
  backgroundColor: white;
  borderWidth: 1px;
  borderColor: ${Colors.border};
  borderRadius: 8px;
  width: 100%;
  height: ${BUTTON_HEIGHT}px;
  paddingLeft: 18px;

  justifyContent: center;
  marginBottom: ${moderateScale(16, 0.3)}px;
`

const PlaceHolder = styled(Label)`
  fontSize: ${moderateScale(14, 0.3)}px;
  ${props => props.placeholderTextColor && 'color:' + props.placeholderTextColor}
`

const Button = props => {
  const { children, style, disabled, label, labelStyle, selectedItem, placeholder, placeholderTextColor, ...allProps } = props

  return (
    <>
      {
        !!label &&
          <Label style={labelStyle}>{label}</Label>
      }
      <ButtonContainer
        disabled={disabled}
        style={[
          style,
          disabled && {
            opacity: 0.7
          }
        ]}
        {...allProps}
      >
        <>
          {
            !!placeholder &&
              <PlaceHolder
                placeholderTextColor={placeholderTextColor}
              >{placeholder}
              </PlaceHolder>
          }

          {children}
        </>
      </ButtonContainer>
    </>
  )
}

Button.defaultProps = {
  labelStyle: {
    marginBottom: moderateScale(6)
  },
  placeholderTextColor: Colors.lightGray,
  underlayColor: Colors.silver,
  disabled: false
}

export default Button
