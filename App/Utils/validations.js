import * as yup from 'yup'

export const contactValidationSchema = yup.object().shape({
  firstName: yup.string()
    .label('First Name')
    .required('First name is required'),
  lastName: yup.string()
    .label('Last Name')
    .required('Last name is required'),
  companyName: yup.string()
    .label('Last Name')
    .required('Last name is required'),
  email: yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Email is required'),
  phoneNumber: yup.number()
    .label("Phone Number")
    .required('Phone number is required')
})
