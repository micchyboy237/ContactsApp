import React from 'react'
import { Container as ContainerView } from '../../Components/Layout'
import Header from './Header'

const Container = props => {
  const {children, ...allProps} = props

  return (
    <ContainerView {...allProps}>
        <Header />
        {children}
    </ContainerView>
  )
}

export default Container
