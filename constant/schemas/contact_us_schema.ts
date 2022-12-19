import {object, string} from 'yup'

const  contactUsSchema = object({
  firstName: string().required('Enter your first name!').min(3, 'First name too short!').max(15, 'Fist name to long!'),
  lastName: string().required('Enter your last name!').min(3, 'Last name too short!').max(15, 'Last name to long!'),
  email: string().email().required('Enter your email!'),
  message: string().required('Write us a message please!').min(10, 'Can you add some details!').max(500, 'Too much details!'),
})

export default contactUsSchema;