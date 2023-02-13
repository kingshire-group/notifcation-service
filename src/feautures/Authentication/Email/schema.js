import * as yup from 'yup'

const passwordMatcher =
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'

export const inputSchema = yup.object().shape({
  fullname: yup.string().required('Required'),
  email: yup.string().required('Required'),
  password: yup.string()
    .min(8)
    .matches(passwordMatcher, 'Password not met the criteria')
    .required('Required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must march')
    .required('Required')
})