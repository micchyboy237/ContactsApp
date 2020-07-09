import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Modal,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import UserActions from '../Redux/UserRedux'
import { Label, Heading, SubHeading } from '../Components/Text'
import { View } from '../Components/Layout'
import { Button } from '../Components/Buttons'
import { Colors } from '../Themes'

const LogoutPrompt = props => {
  const { onClose, onLogout, isVisible } = props

  return (
    <View>
      <Modal
        animationType='slide'
        transparent
        visible={isVisible}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Heading>Logout</Heading>
            <SubHeading style={{ textAlign: 'center', paddingLeft: 40, paddingRight: 40 }}>
              Are you sure you want to logout?
            </SubHeading>

            <Button label='GO BACK' onPress={onClose} />

            <TouchableOpacity style={{ padding: 20 }} onPress={onLogout}>
              <Label
                style={{ color: Colors.purple }} weight='bold'
              >
                LOG OUT
              </Label>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Label>Log out</Label>
    </View>
  )
}

const CustomDrawer = props => {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={() => {
          return (
            <LogoutPrompt
              isVisible={modalVisible}
              onClose={() => setModalVisible(!modalVisible)}
              onLogout={() => {
                setModalVisible(!modalVisible)
                dispatch(UserActions.logout())
              }}
            />
          )
        }}
        onPress={() => setModalVisible(true)}
      />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: '40%'
  },
  innerContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})

export default CustomDrawer
