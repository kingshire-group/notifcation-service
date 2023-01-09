import { Formik } from "formik";
import { useRef } from "react"
import Google from "../../../feautures/Auth/Google"
import useResize from "../../../hooks/useResize"
import LoginAnimation from "./LoginAnimation";
import FormInput from "../Email/FormInput";
import { SubmitButton } from '../../../app/GlobalStyles.style'
import { StyledLoginPageContainer, StyledLoginForm, StyledLink } from "./style";
import { keyInformation } from "../../../data/keyInformation";

const Login = ({height}) => {
  const loginButtonRef = useRef();
  const { width: googleButtonWidth } = useResize(loginButtonRef);

  const loginFormik = Formik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      termsConditions: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  }).props.value

  const inputs = [
    {
      id: 1,
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      name: 'email'
    },
    {
      id: 2,
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      name: 'password'
    }
  ]

  return (
    <StyledLoginPageContainer height={height}>
      <LoginAnimation />
      <div className="login-section">
        <StyledLoginForm>
          <h1>Let's get back in... 👋</h1>
          {inputs.map(input => 
            <FormInput key={input.id} {...input} 
              value={loginFormik.values[input.name]} 
              onChange={loginFormik.handleChange}
            />
          )}
          <StyledLink className="forgot-password">Forgot Password?</StyledLink>
          <SubmitButton ref={loginButtonRef}>Login</SubmitButton>
        </StyledLoginForm>
        <h3 className="horizontal-or-separator">or</h3>
        <Google googleButtonWidth={googleButtonWidth}/>
        <p>New to {keyInformation.siteName}? <StyledLink>Register</StyledLink></p>
      </div>
    </StyledLoginPageContainer>
  )
}

export default Login;