import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  ContactsSearchScreen,
  ContactDetailsScreen
} from '../Containers/ContactsScreens'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ContactsSearch'}
    >
      <Stack.Screen name='ContactsSearch' component={ContactsSearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ContactDetails' component={ContactDetailsScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
