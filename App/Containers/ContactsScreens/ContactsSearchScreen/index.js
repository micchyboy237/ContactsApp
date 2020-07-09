import React from 'react'
import {FlatList} from 'react-native'
import Container from '../../Shared/Container'
import {View} from '../../../Components/Layout'
import {Metrics} from '../../../Themes'
import Search from '../../Shared/Search'
import ContactItem from './ContactItem'
import { moderateScale } from 'react-native-size-matters/extend'

const ContactsSearchScreen = props => {
  const data = [
    {
      id: "5f063d82bdf6556b8c7887dc",
      firstName: "Jethro",
      lastName: "Estrada",
      companyName: "Amazon",
      email: "jethroestrada237@gmail.com",
      phoneNumber: 639159897270
    },
    {
      id: "5f063d82bdf6556b8c7887dc",
      firstName: "Lebron",
      lastName: "James",
      companyName: "Amazon",
      email: "jethroestrada237@gmail.com",
      phoneNumber: 639225913204
    }
  ]

  return (
    <Container>
      <View style={{
        paddingHorizontal: Metrics.spaceHorizontal,
        marginBottom: moderateScale(12)
      }}>
        <Search />
      </View>            
      <FlatList
        keyExtractor={item => item._id}
        data={data}
        renderItem={({item}) => <ContactItem contact={item}/>}
      />
    </Container>
  )
}

export default ContactsSearchScreen
