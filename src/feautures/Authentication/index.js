import LoginAnimation from './components/LoginAnimation'
import LoginForm from './components/LoginForm'
import { LOGIN_PATH, SIGNUP_PATH } from './data/paths'

const PATH_TO_LOGIN =  LOGIN_PATH.split('/')[1]
const PATH_TO_SIGNUP = SIGNUP_PATH.split('/')[1]

export {
  PATH_TO_LOGIN,
  PATH_TO_SIGNUP,
  LoginForm,
  LoginAnimation
}
