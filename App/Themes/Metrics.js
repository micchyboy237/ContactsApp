import { Dimensions, Platform } from 'react-native'
import { moderateScale } from 'react-native-size-matters/extend'

// import normalize from '../Utils/normalize';

const { width, height } = Dimensions.get('window')

const wp = percentage => {
  const value = (percentage * width) / 100
  return Math.round(value)
}

const hp = percentage => {
  const value = (percentage * height) / 100
  return Math.round(value)
}

const isIos = Platform.OS === 'ios'
const isAndroid = Platform.OS === 'android'

// Used via Metrics.baseMargin
const metrics = {
  spaceHorizontal: moderateScale(16),
  spaceHorizontalLg: 36,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  tinyMargin: 4,
  smallMargin: 8,
  baseMargin: 16,
  largeMargin: 24,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: isIos ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  wp,
  hp,
  isIos,
  isAndroid
}

export default metrics
