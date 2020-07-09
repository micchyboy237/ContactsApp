import React from 'react'
import { Provider } from 'react-redux'
import RootContainer from './Containers/RootContainer'
import createStore from './Redux'

export const store = createStore()

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  )
}

// allow reactotron overlay for fast design in dev mode
export default App
