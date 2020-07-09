import React, {useState, useEffect} from 'react'
import {FlatList} from 'react-native'
import {useSelector} from 'react-redux'
import Container from '../../Shared/Container'
import {View} from '../../../Components/Layout'
import {Metrics} from '../../../Themes'
import {Label} from '../../../Components/Text'
import Search from '../../Shared/Search'
import ContactItem from './ContactItem'
import { moderateScale } from 'react-native-size-matters/extend'
import { DETAILS } from '../ContactDetailsScreen'
import { debounce } from 'lodash'
import {ContactSelectors} from '../../../Redux/ContactRedux'

const ContactsSearchScreen = props => {
  const contactsData = useSelector(state => ContactSelectors.getContacts(state))
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState("")

  const filterData = debounce(text => {
    setData(contactsData.filter(contact => {
      return !text || DETAILS.some(detail => {
        const contactDetail = contact[detail.type]

        return String(contactDetail).includes(text)
      })
    }))
  }, 300)

  useEffect(() => {
    filterData(searchText)
  }, [contactsData, searchText])

  return (
    <Container headerTitle="Contacts">
      <View style={{
        paddingHorizontal: Metrics.spaceHorizontal,
        marginBottom: moderateScale(12)
      }}>
        <Search 
          onChangeText={text => setSearchText(text)}
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
