import React from 'react'
import Container from '../../Shared/Container'
import { View } from '../../../Components/Layout'
import { Label, Text } from '../../../Components/Text'
import styled from 'styled-components'
import { Colors, Metrics } from '../../../Themes'
import { moderateScale } from 'react-native-size-matters/extend'

export const DETAILS = [
  {
    type: 'firstName',
    value: 'First Name'
  },
  {
    type: 'lastName',
    value: 'Last Name'
  },
  {
    type: 'companyName',
    value: 'Company Name'
  },
  {
    type: 'email',
    value: 'Email'
  },
  {
    type: 'phoneNumber',
    value: 'Phone Number'
  },
]

const DetailContainer = styled.View`
  width: 100%;
  height: ${60}px;
  paddingHorizontal: ${Metrics.spaceHorizontal}px;
  justifyContent: center;
  borderBottomWidth: 1px;
  borderBottomColor: ${Colors.lightestGray};
`

const ContactDetailsScreen = props => {
  const contact = props.route.params

  return (
    <Container headerTitle={contact.firstName + " " + contact.lastName}>
      {
        DETAILS.map(detail => {          
          const contactDetail = contact[detail.type]
          return (
            <DetailContainer key={detail.type}>
              <View
                row
                justifyBetween
                alignCenter                
              >
                <Label>{detail.value}</Label>
                <Text>{contactDetail}</Text>
              </View>
            </DetailContainer>
          )
        })
      }
    </Container>
  )
}

export default ContactDetailsScreen
