import * as yup from 'yup'

const emailMatcher = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i
const passwordMatcher =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'

export const loginSchema = yup.object().shape({
  email: yup.string().matches(emailMatcher, 'Invalid Email').required('Required'),
  password: yup.string()
    .min(8)
    .matches(passwordMatcher, 'Password not met the criteria')
    .required('Required')
})