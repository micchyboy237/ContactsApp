import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  ContactsSearchScreen,
  ContactAddScreen,
  ContactDetailsScreen
} from '../Containers/ContactsScreens'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ContactsSearch'}
      screenOptions={({ route }) => ({
        headerShown: false
      })}
    >
      <Stack.Screen name='ContactsSearch' component={ContactsSearchScreen} />
      <Stack.Screen name='ContactAdd' component={ContactAddScreen} />
      <Stack.Screen name='ContactDetails' component={ContactDetailsScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
