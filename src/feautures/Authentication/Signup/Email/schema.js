import * as yup from 'yup'

const emailMatcher = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i
const passwordMatcher =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'

export const inputSchema = yup.object().shape({
  fullname: yup.string().min(5, 'Must be at least 5 letters').required('Required'),
  email: yup.string().matches(emailMatcher, 'Invalid Email').required('Required'),
  password: yup.string()
    .min(8)
    .matches(passwordMatcher, 'Password not met the criteria')
    .required('Required'),
  confirmpassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required')
})