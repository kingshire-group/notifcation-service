import { useFormik } from "formik"
import FormInput from "./FormInput"
import { inputSchema } from './schema'
import { 
  StyledSignUpRules,
  StyledSingUpForm 
} from "./style"
import {keyInformation} from '../../../data/keyInformation'
import Error from "./Error"
import { useContext, useEffect } from "react"
import Modal from "../../../Modal"
import { Link, useNavigate } from "react-router-dom"
import { useCreateProfileMutation, useLoginMutation } from "../authApiSlice"
import { toast } from "react-toastify"
import { processResponse } from "../../../utils/processResponse"
import { theme } from "../../../data/theme"
import { SignUpFormContext } from ".."
import { SubmitButton } from "../../../app/GlobalStyles.style"
import { useDispatch } from "react-redux"
import { setCredentials } from "../authSlice"

// password rules
const passwordRules = [
  'have at least one upper and lower case letter',
  'have at least one digit',
  'have at least one special character - #?!@$%^&*- ',
  'be a minimum of 8 characters'
]

const EmailForm = () => {
  const { openModal, close } = useContext(SignUpFormContext)
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

  const passwordRulesModalHtml = 
    <StyledSignUpRules>
      <span onClick={close}>✖</span>
      <ul>
      {passwordRules.map((rule, index) =>
        <li key={index}>
          {rule}
        </li>
      )}
      </ul>
    </StyledSignUpRules>

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
    validationSchema: inputSchema,
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
            navigate(`/user-profile/${data.user.username}`)
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

  const inputs = [
    {
      id: 1,
      label: 'Full Name',
      type: 'text',
      placeholder: 'Full Name',
      name: 'fullname'
    },
    {
      id: 2,
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      name: 'email'
    },
    {
      id: 3,
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      name: 'password'
    },
    {
      id: 4,
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm Password',
      name: 'confirmpassword'
    }
  ]

  return (
    <>
      <StyledSingUpForm onSubmit= {handleSubmit} autoComplete='off'>
        <div className="form-title">
          <h1>Let's fill this in... ✍📝</h1>
          <span style={{opacity: 0.5}}>
            In order to kick off your journey with {keyInformation.siteName}, 
            please complete the form below
          </span>
        </div>
        {inputs.map(input => 
          <div key={input.id} className='form-input-container'>
            <FormInput key={input.id} {...input} 
              value={values[input.name]} 
              onChange={handleChange}
              onBlur={handleBlur}
              className={ errors[input.name] && touched[input.name] ? 'input-error' : '' }
            />
            {errors[input.name] && touched[input.name] && <Error errorMessage={errors[input.name]}/>}
          </div>
        )}
        <p>Already have an account?<span> </span>
          <Link style={{color: theme.colors.blue, fontStyle: "italic"}}>
            Login
          </Link>
        </p>
        <SubmitButton type="submit" disabled={isSubmitting}>Submit</SubmitButton>
      </StyledSingUpForm>
      { openModal && <Modal handleClose={close} text={passwordRulesModalHtml}/> }
    </> 
  )
}

export default EmailForm
