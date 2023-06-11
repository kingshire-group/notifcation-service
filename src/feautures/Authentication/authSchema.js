import * as yup from 'yup'

const emailMatcher = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i
const passwordMatcher =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
const usernameMatcher =
'^(?=[a-zA-Z0-9._£$€]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$'

export const loginSchema = yup.object().shape({
  email: yup.string().matches(emailMatcher, 'Invalid Email').required('Required'),
  password: yup.string()
    .min(8)
    .matches(passwordMatcher, 'Password not met the criteria')
    .required('Required')
})

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

export const usernameSchema = yup.object().shape({
  username: yup.string().matches(usernameMatcher, 'Invalid Username').required('Required'),
})