import React, { useState, useRef, useEffect } from 'react'
import {
  ScrollView
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../Shared/Container'
import { Content, View } from '../../../Components/Layout'
import { Heading, SubHeading, ErrorMessage } from '../../../Components/Text'
import { FormInput } from '../../../Components/Forms'
import { Button } from '../../../Components/Buttons'

import { contactValidationSchema } from '../../../Utils/validations'
import { Formik } from 'formik'
import ContactActions, { ContactSelectors } from '../../../Redux/ContactRedux'

const ContactAddScreen = props => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const lastNameRef = useRef()
  const companyNameRef = useRef()
  const emailRef = useRef()
  const phoneNumberRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const isCreateContactSucceeded = useSelector(state => ContactSelectors.isCreateContactSucceeded(state))
  const contactError = useSelector(state => ContactSelectors.getCreateContactError(state))

  useEffect(() => {
    if (isCreateContactSucceeded) {
      props.navigation.navigate('ContactsSearch')
    }

    setIsLoading(false)
  }, [isCreateContactSucceeded, contactError])


  return (
    <Container headerTitle="Add Contact">
      <ScrollView
        keyboardShouldPersistTaps='always'        
        bounces={false}
      >
        <Content>
          <Formik
            initialValues={{ firstName: '', lastName: '', companyName: '', email: '', phoneNumber: '' }}
            validationSchema={contactValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={values => {
              setIsLoading(true)
              dispatch(ContactActions.createContact(values))
            }}
          >
            {({ handleChange, values, handleSubmit, errors, setFieldValue }) => (
              <>
                <FormInput
                  autoFocus
                  label='First Name'
                  placeholder='First Name'
                  autoCapitalize='words'
                  onChangeText={handleChange('firstName')}
                  returnKeyType='next'
                  onSubmitEditing={() => lastNameRef.current.focus()}
                >
                  <ErrorMessage>{errors.firstName}</ErrorMessage>
                </FormInput>

                <FormInput
                  ref={lastNameRef}
                  label='Last Name'
                  placeholder='Last Name'
                  autoCapitalize='words'
                  onChangeText={handleChange('lastName')}
                  returnKeyType='next'
                  onSubmitEditing={() => companyNameRef.current.focus()}
                >
                  <ErrorMessage>{errors.lastName}</ErrorMessage>
                </FormInput>

                <FormInput
                  ref={companyNameRef}
                  label='Company Name'
                  placeholder='Company Name'
                  autoCapitalize='words'
                  onChangeText={handleChange('companyName')}
                  returnKeyType='next'
                  onSubmitEditing={() => emailRef.current.focus()}
                >
                  <ErrorMessage>{errors.companyName}</ErrorMessage>
                </FormInput>

                <FormInput
                  ref={emailRef}
                  label='Email'
                  placeholder='name@email.com'
                  keyboardType='email-address'
                  onChangeText={handleChange('email')}
                  returnKeyType='next'
                  onSubmitEditing={() => phoneNumberRef.current.focus()}
                >
                  <ErrorMessage>{errors.email}</ErrorMessage>
                </FormInput>

                <FormInput
                  ref={phoneNumberRef}
                  label="Phone Number"
                  placeholder='(Area code)(Phone no.))'
                  keyboardType='number-pad'
                  onChangeText={text => setFieldValue('phoneNumber', Number(text))}
                  returnKeyType='next'
                  onSubmitEditing={() => passwordRef.current.focus()}
                >
                  <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
                </FormInput>

                <View
                  isFlex
                  justifyEnd
                  style={{
                    paddingTop: 20,
                    paddingBottom: 12
                  }}
                >
                  <Button
                    isLoading={isLoading}
                    onPress={handleSubmit}
                    label='NEXT'
                  />
                  <ErrorMessage center>{contactError}</ErrorMessage>
                </View>
              </>
            )}
          </Formik>

        </Content>
      </ScrollView>
    </Container>
  )
}

export default ContactAddScreen
