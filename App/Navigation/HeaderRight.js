import React from 'react'
import { Label } from '../Components/Text'

const HeaderRight = props => {
  const { labelStyle, routeName } = props
  switch (routeName) {
    case 'StudentRegistration':
      return <Label light style={labelStyle}>Step 1 of 4</Label>
    case 'GradRegistration':
      return <Label light style={labelStyle}>Step 2 of 4</Label>
    case 'SchoolRegistration':
      return <Label light style={labelStyle}>Step 1 of 4</Label>
  };

  return null
}

HeaderRight.defaultProps = {}

export default HeaderRight
