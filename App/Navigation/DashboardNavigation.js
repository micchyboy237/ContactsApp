import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  createDrawerNavigator
} from '@react-navigation/drawer'
import { Colors } from '../Themes'
import FeedsScreen from '../Containers/FeedsScreen'
import { PostDetailsScreen, PostCategoryScreen } from '../Containers/CreatePostScreens'
import CustomDrawer from './CustomDrawer'
import { moderateScale } from 'react-native-size-matters/extend'
import DrawerLabel from './DrawerLabel'
import { Label } from '../Components/Text'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const DashboardStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Feeds'
      screenOptions={({ route }) => ({
        headerTintColor: Colors.text,
        headerStyle: {
          // height: moderateScale(88, 0.1),
          backgroundColor: Colors.background,
          // borderBottomWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
          borderBottomColor: 'transparent'
        },
        headerTitleStyle: {
          color: Colors.gray
        },
        headerBackTitleStyle: {
          fontSize: moderateScale(14, 0.3)
        }
      })}
    >
      <Stack.Screen name='Feeds' component={FeedsScreen} options={{ headerShown: false, headerTitleContainerStyle: { flex: 1, marginLeft: moderateScale(100), marginRight: moderateScale(100) } }} />
      <Stack.Screen name='CreatePostDetails' component={PostDetailsScreen} options={{ headerBackTitle: 'Cancel', headerStyle: { backgroundColor: 'white' }, headerTitleAlign: 'center', headerTitle: <Label gray weight='medium'>Create Post</Label> }} />
      <Stack.Screen name='CreatePostCategory' component={PostCategoryScreen} options={{ headerBackTitle: 'Back', headerStyle: { backgroundColor: 'white' }, headerTitleAlign: 'center', headerTitle: <Label gray weight='medium'>Create Post</Label> }} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <Drawer.Navigator
      initialRouteName='FeedsScreen'
      drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: Colors.purple,
        activeTintColor: Colors.white
      }}
    >
      <Drawer.Screen name='Dashboard' component={DashboardStackNavigation} options={{ drawerLabel: props => <DrawerLabel {...props}>Dashboard</DrawerLabel> }} />
    </Drawer.Navigator>
  )
}
