import React from 'react'
import { Container as ContainerView } from '../../Components/Layout'
import Header from './Header'

const Container = props => {
  const {children, headerTitle, ...allProps} = props

  return (
    <ContainerView {...allProps}>
        <Header headerTitle={headerTitle}/>
        {children}
    </ContainerView>
  )
}

export default Container
