import React from 'react'
import { Label } from '../Components/Text'

const DrawerLabel = props => {
  const { children, focused, color } = props
  return (
    <Label
      weight={focused ? 'bold' : 'regular'}
      style={{
        color
      }}
    >{children}
    </Label>
  )
}

DrawerLabel.defaultProps = {}

export default DrawerLabel
