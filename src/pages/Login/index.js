/* import { useFormik } from "formik";
import { useRef } from "react"
import Google from "../Google"
import useResize from "../../../hooks/useResize"
import LoginAnimation from "./LoginAnimation";
import { SubmitButton } from '../../../app/GlobalStyles.style'
import { StyledLoginPageContainer, StyledLoginForm, StyledLink } from "./style";
import { keyInformation } from "../../../data/keyInformation";
import Error from "../Signup/Email/Error";
import { loginSchema } from "./schema";
import { useLoginMutation } from "../authApiSlice";
import { processResponse } from "../../../utils/processResponse";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Login = ({height}) => {
  const loginButtonRef = useRef();
  const { width: googleButtonWidth } = useResize(loginButtonRef);

  const [login, { isLoading, isSuccess, error, isError }] = useLoginMutation()
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      try {
        const response = await login(values)
        console.log(response)
        const { data, status } = processResponse(response)
        console.log(data)
        console.log(status)
        * if(status === 'success') {
          actions.setSubmitting(false)
          actions.resetForm()
          //login user here
          navigate('/user/signup/auth-username')
        }
        else{
          console.log('Form submission failed')
        } *
      } catch (error) {
        console.log('Error in submission')
      }
    }
  })

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

  useEffect(() => {
    if (isSuccess) {
      toast.success('Signin successful')
    }
    if(isError) {
      const message = error.status === 'FETCH_ERROR' ?
        'Error occurred - server down' :
        'Wrong Email or/and Password '
      toast.error(message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <StyledLoginPageContainer height={height}>
      <LoginAnimation />
      <div className="login-section">
        <StyledLoginForm onSubmit= {handleSubmit} autoComplete='off'>
          <h1>Let's get back in... 👋</h1>
          <div className="LoginInputs">
            {inputs.map(input =>
              <div className="formInput" key={input.id}>
                <div>
                  <label>{input.label}</label>
                  <input {...input}
                    value={values[input.name]} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={ errors[input.name] && touched[input.name] ? 'input-error' : '' }
                  />
                </div>
                {errors[input.name] && touched[input.name] && <Error errorMessage={errors[input.name]}/>}
              </div>
            )}
          </div>
          <SubmitButton type="submit" ref={loginButtonRef} disabled={isSubmitting}>Login</SubmitButton>
        </StyledLoginForm>
        <h3 className="horizontal-or-separator">or</h3>
        <Google googleButtonWidth={googleButtonWidth}/>
        <div className="other-options">
          <p>New to {keyInformation.siteName}? <StyledLink>Register</StyledLink></p>
          <StyledLink className="forgot-password">Forgot Password?</StyledLink>
        </div>
      </div>
    </StyledLoginPageContainer>
  )
}

export default Login */