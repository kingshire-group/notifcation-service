import * as yup from 'yup'

const usernameMatcher =
	'^(?=[a-zA-Z0-9._£$€]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$'

export const usernameSchema = yup.object().shape({
  username: yup.string().matches(usernameMatcher, 'Invalid Username').required('Required'),
})