import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import FormInput from './FormInput'
import SignupPasswordInput from './SignupPasswordInput'
import { setCredentials } from '../authSlice'
import { signupSchema } from '../authSchema'
import { signupFormInputs } from '../data/formInputs'
import { 
  StyledSignupRules,
  StyledSingUpForm 
} from '../assets/authStyle'
import {
  useCreateProfileMutation,
  useLoginMutation
} from '../authApiSlice'
import { theme } from '../../../data/theme'
import { SITE } from '../../../data/constants'
import Modal from '../../../components/Modal'
import { SubmitButton } from '../../../components/common.style'
import { SignupFormContext } from '../../../pages/Signup'
import { processResponse } from '../../../utils/processResponse'
import FormError from './FormError'
import { SIGNUP_PATH, SIGNUP_PATHS } from '../data/paths'

const passwordRules = [
  'have at least one upper and lower case letter',
  'have at least one digit',
  'have at least one special character - #?!@$%^&*- ',
  'be a minimum of 8 characters'
]

const EmailSignupForm = () => {
  const { openModal, close } = useContext(SignupFormContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [createProfile, {
    isLoading: isLoadingProfileCreation,
    isSuccess: isSuccessProfileCreation,
    error: errorProfileCreation,
    isError: isErrorProfileCreation
  }] = useCreateProfileMutation()

  const [login, {
    isLoading: isLoadingLogin,
    isSuccess: isSuccessLogin,
    error: errorLogin,
    isError: isErrorLogin
  }] = useLoginMutation()

  useEffect(() => {
    if(isErrorProfileCreation){
      const message = errorProfileCreation.status === 'FETCH_ERROR' 
        ? 'Error occurred - server down'
        : 'Registration failed. Please try again!'
      toast.error(message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingProfileCreation])

  useEffect(() => {
    if (isSuccessProfileCreation && isSuccessLogin) {
      toast.success('signup and login successful')
    }

    if (isErrorLogin) {
      const message = errorLogin.status === 'FETCH_ERROR' ?
        `Error occurred - server down`:
        'Login failed. Please try again!'
      toast.error(message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingLogin])

  // Form
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (values, actions) => {
      try {
        const responseForProfileCreation = await createProfile(values)
        const { status } = processResponse(responseForProfileCreation)
        if(status === 'success') {
          actions.setSubmitting(false)
          actions.resetForm()
          //login user
          const responseForUserLogin = await login({
            email: values.email,
            password: values.password
          })
          const { data, status: loginStatus } = processResponse(responseForUserLogin)
          if(loginStatus === 'success'){
            dispatch(setCredentials(data))
            navigate(`${SIGNUP_PATH}${SIGNUP_PATHS.USERNAME}`)
          }
        }
        else{
          console.log('Form submission failed')
        }
      } catch (error) {
        console.log('Error in submission')
      }
    }
  })

  const passwordRulesModalHtml = 
    <StyledSignupRules>
      <span onClick={close}>✖</span>
      <ul>
      {passwordRules.map((rule, index) =>
        <li key={index}>
          {rule}
        </li>
      )}
      </ul>
    </StyledSignupRules>

  const signupPassowrdInput = input =>
    <SignupPasswordInput key={input.id} {...input} 
      value={values[input.name]} 
      onChange={handleChange}
      onBlur={handleBlur}
      className={ errors[input.name] && touched[input.name] ? 'input-error' : '' }
    />

  const formInput = input =>
    <FormInput key={input.id} {...input} 
      value={values[input.name]} 
      onChange={handleChange}
      onBlur={handleBlur}
      className={ errors[input.name] && touched[input.name] ? 'input-error' : '' }
    />

  return (
    <>
      <StyledSingUpForm onSubmit= {handleSubmit} autoComplete='off'>
        <div className='form-title'>
          <h1>Let's fill this in... ✍📝</h1>
          <span style={{opacity: 0.5}}>
            In order to kick off your journey with {SITE.name}, 
            please complete the form below
          </span>
        </div>
        {signupFormInputs.map(input =>
          <div key={input.id} className='form-input-container'>
            {input.label === 'Password' ? signupPassowrdInput(input) : formInput(input)}
            {errors[input.name] && touched[input.name] && <FormError errorMessage={errors[input.name]}/>}
          </div>
        )}
        <p>Already have an account?<span> </span>
          <Link style={{color: theme.colors.blue, fontStyle: 'italic'}}>
            Login
          </Link>
        </p>
        <SubmitButton type='submit' disabled={isSubmitting}>Submit</SubmitButton>
      </StyledSingUpForm>
      { openModal && <Modal handleClose={close} text={passwordRulesModalHtml}/> }
    </> 
  )
}

export default EmailSignupForm
