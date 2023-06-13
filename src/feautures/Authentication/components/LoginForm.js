import { useFormik } from 'formik'
import { useRef } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Google from './Google'
import FormError from './FormError'
import FormInput from './FormInput'
import useResize from '../hooks/useResize'
import { loginSchema } from '../authSchema'
import { loginFormInputs } from '../data/formInputs'
import { StyledLoginForm, StyledLink, StyledLoginSection } from '../assets/authStyle'
import { useLoginMutation } from '../authApiSlice'
import { processResponse } from '../../../utils/processResponse'
import { SubmitButton } from '../../../components/common.style'
import { SITE } from '../../../data/constants'

const LoginForm = () => {
  const loginButtonRef = useRef()
  const { width: googleButtonWidth } = useResize(loginButtonRef)

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
        /* if(status === 'success') {
          actions.setSubmitting(false)
          actions.resetForm()
          //login user here
          navigate('/user/signup/auth-username')
        }
        else{
          console.log('Form submission failed')
        } */
      } catch (error) {
        console.log('Error in submission')
      }
    }
  })

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
    <StyledLoginSection>
      <StyledLoginForm onSubmit= {handleSubmit} autoComplete='off'>
        <h1>Let's get back in... 👋</h1>
        <div className='LoginInputs'>
          {loginFormInputs.map(input =>
            <div key={input.id} className='form-input-container'>
              <FormInput key={input.id} {...input} 
                value={values[input.name]} 
                onChange={handleChange}
                onBlur={handleBlur}
                className={ errors[input.name] && touched[input.name] ? 'input-error' : '' }
              />
              {errors[input.name] && touched[input.name] && <FormError errorMessage={errors[input.name]}/>}
            </div>
          )}
        </div>
        <SubmitButton type='submit' ref={loginButtonRef} disabled={isSubmitting}>Login</SubmitButton>
      </StyledLoginForm>
      <h3 className='horizontal-or-separator'>or</h3>
      <Google googleButtonWidth={googleButtonWidth}/>
      <div className='other-options'>
        <p>New to {SITE.name}? <StyledLink>Register</StyledLink></p>
        <StyledLink className='forgot-password'>Forgot Password?</StyledLink>
      </div>
    </StyledLoginSection>
  )
}

export default LoginForm
