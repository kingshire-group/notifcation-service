
import { StyledLoginPageContainer } from './style'
import { LoginAnimation, LoginForm } from '../feautures/authentication'

const Login = ({height}) => {
  return (
    <StyledLoginPageContainer height={height}>
      <LoginAnimation />
      <LoginForm />
    </StyledLoginPageContainer>
  )
}

export default Login
