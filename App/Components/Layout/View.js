import React from 'react'
import styled from 'styled-components'

const ViewContainer = styled.View`
  ${props => props.isFlex && 'flex: 1'}
  ${props => props.row && 'flexDirection: row'}
  ${props => props.justifyEnd && 'justifyContent: flex-end'}
  ${props => props.justifyCenter && 'justifyContent: center'}
  ${props => props.justifyBetween && 'justifyContent: space-between'}
  ${props => props.alignCenter && 'alignItems: center'}
  ${props => props.alignEnd && 'alignItems: flex-end'}
  ${props => props.selfCenter && 'alignSelf: center'}
`

const View = props => {
  return (
    <ViewContainer
      {...props}
    />
  )
}

export default View
