import React from 'react'
import SvgIcon from 'react-native-svg-icon'
import svgs from '../Themes/Svgs' // point to your svgs.js wherever that may be
const Icon = props => <SvgIcon {...props} svgs={svgs} />
export default Icon
