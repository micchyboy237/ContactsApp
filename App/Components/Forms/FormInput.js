import React, { useRef } from 'react'
import {
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import styled from 'styled-components'
import { Colors, ApplicationStyles } from '../../Themes'
import { Label } from '../../Components/Text'
import { moderateScale } from 'react-native-size-matters/extend'

const { height } = ApplicationStyles.formRow
const INPUT_HEIGHT = moderateScale(height, 0.3)

const InputContainer = styled.TextInput`
  fontSize: ${moderateScale(14, 0.3)}px;
  backgroundColor: white;
  ${props => !props.noBorder && `borderWidth: 1px; borderColor: ${Colors.border}; borderRadius: 8px;`};
  width: 100%;
  height: ${INPUT_HEIGHT}px;
  paddingLeft: ${moderateScale(18, 0.3)}px;
`

const InputView = styled.View`
  justifyContent: center;
  ${props => !props.noMargin && `marginBottom: ${moderateScale(16, 0.3)}px`};
`

const FormInput = React.forwardRef((props, ref) => {
  const inputRef = useRef(null)
  const { children, containerStyle, onChangeText, noMargin, noBorder, label, labelStyle, ...allProps } = props

  const onChangeTextFn = text => {
    onChangeText && onChangeText(text)
  }

  React.useImperativeHandle(
    ref,
    () => {
      const inputCurrent = inputRef.current

      return {
        ...inputCurrent,
        clear: () => {
          inputCurrent.clear()
          onChangeTextFn('')
        }
      }
    },
    []
  )

  return (
    <>
      {
        !!label &&
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Label weight='medium' style={labelStyle}>{label}</Label>
          </TouchableWithoutFeedback>
      }
      <InputView style={containerStyle} noMargin={noMargin}>
        <InputContainer
          ref={inputRef}
          onChangeText={onChangeTextFn}
          noBorder={noBorder}
          {...allProps}
        />
        {children}
      </InputView>
    </>
  )
})

FormInput.defaultProps = {
  containerStyle: {},
  labelStyle: {
    marginBottom: moderateScale(6)
  },
  placeholderTextColor: Colors.lightGray,
  autoCapitalize: 'none',
  autoCompleteType: 'off',
  autoCorrect: false,
  returnKeyType: 'done',
  noBorder: false,
  noMargin: false
}

export default FormInput
