import Colors from './Colors'
import { moderateScale } from 'react-native-size-matters/extend'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const spaceHorizontal = moderateScale(16, 0.3)

const ApplicationStyles = {
  spaceHorizontal,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  panelHeader: {
    zIndex: 5000,
    // backgroundColor: Colors.primary
  },
  formRow: {
    height: 48,
    paddingLeft: spaceHorizontal
  },
  button: {
    height: 48
  }
}

export default ApplicationStyles
