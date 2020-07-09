import React, {useState} from 'react'
import {FlatList} from 'react-native'
import Container from '../../Shared/Container'
import {View} from '../../../Components/Layout'
import {Metrics} from '../../../Themes'
import {Label} from '../../../Components/Text'
import Search from '../../Shared/Search'
import ContactItem from './ContactItem'
import { moderateScale } from 'react-native-size-matters/extend'
import { DETAILS } from '../ContactDetailsScreen'
import { debounce } from 'lodash'

const SAMPLE_DATA = [
  {
    _id: "5f063d82bdf6556b8c7887dc",
    firstName: "Jethro",
    lastName: "Estrada",
    companyName: "Amazon",
    email: "jethroestrada237@gmail.com",
    phoneNumber: 639159897270
  },
  {
    _id: "5f063d82bdf6556b8c7887d2",
    firstName: "Lebron",
    lastName: "James",
    companyName: "Amazon",
    email: "jethroestrada237@gmail.com",
    phoneNumber: 639225913204
  }
]

const ContactsSearchScreen = props => {
  const [data, setData] = useState(SAMPLE_DATA)
  const onSearch = debounce(text => {
    setData(SAMPLE_DATA.filter(contact => {
      return DETAILS.some(detail => {
        const contactDetail = contact[detail.type]

        return String(contactDetail).includes(text)
      })
    }))
  }, 300)

  return (
    <Container headerTitle="Contacts">
      <View style={{
        paddingHorizontal: Metrics.spaceHorizontal,
        marginBottom: moderateScale(12)
      }}>
        <Search 
          onChangeText={onSearch}
        />
      </View>            
      <FlatList
        keyExtractor={item => item._id}
        data={data}
        renderItem={({item}) => <ContactItem contact={item} onPress={() => props.navigation.navigate('ContactDetails', item)}/>}
        ListFooterComponent={() => data.length === 0 && <Label center gray>No results found</Label>}
      />
    </Container>
  )
}

export default ContactsSearchScreen
