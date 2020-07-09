import * as React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import { NavigationContainer } from '@react-navigation/native'

class ReduxNavigation extends React.Component {
  render () {
    if (!this.props.rehydrated) {
      return <View />
    }

    return (
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    )
  }
}

const mapStateToProps = state => ({
  // nav: state.nav,
  rehydrated: state.startup.rehydrated
})
export default connect(mapStateToProps)(ReduxNavigation)
