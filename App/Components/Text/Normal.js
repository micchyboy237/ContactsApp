import React from 'react'
import { Text } from 'react-native'
import { Colors } from '../../Themes'

// use HEX Colors because it is faster than RGBA and Opacity
// https://stackoverflow.com/questions/38523826/text-css-rendering-performance-rgba-vs-hex-vs-opacity
export const getTextColor = (isGray, isLight) => {
  let color = !isGray ? Colors.text : Colors.gray

  if (isLight) {
    color = !isGray ? Colors.lightText : Colors.lightGray
  }

  return color
}

export const getFontByWeight = weight => {
  switch (weight) {
    case 'medium':
      return 'HelveticaNeue-Medium'
    case 'bold':
      return 'HelveticaNeue-Bold'
    default:
      return 'HelveticaNeue'
  }
}

const TextWithFont = props => {
  const { center, children, error, weight, underline, gray, light, style, ...allProps } = props
  const textColor = getTextColor(gray, light)

  return (
    <Text
      style={[
        {
          fontFamily: getFontByWeight(weight),
          color: textColor
        },
        style,
        center && { textAlign: 'center' },
        error && { color: Colors.error },
        underline && { textDecorationLine: 'underline' }
      ]}
      {...allProps}
    >
      {children}
    </Text>
  )
}

TextWithFont.defaultProps = {
  style: {}
}

export default TextWithFont
