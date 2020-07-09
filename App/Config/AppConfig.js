import { UIManager } from 'react-native'
import { Metrics } from '../Themes'

if (Metrics.isAndroid) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true
}
