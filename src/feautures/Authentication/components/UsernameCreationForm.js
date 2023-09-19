import { StyledSignupRules, StyledUsernameContainer } from '../assets/authStyle'
import FormInput from './FormInput'
import { useFormik } from 'formik'
import { SubmitButton } from '../../../components/common.style'
import { useContext } from 'react'
import { useUpdateUsernameMutation } from '../authApiSlice'
import { useNavigate } from 'react-router-dom'
import { processResponse } from '../../../utils/processResponse'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { SignupFormContext } from '../../../pages/Signup'
import Modal from '../../../components/Modal'
import FormError from './FormError'
import { usernameSchema } from '../authSchema'
import { SIGNUP_PATH, SIGNUP_PATHS } from '../data/paths'

// username rules
const usernameRules = [
  'be between 3 to 20 characters',
  'cannot have two repeated underscore or dots at the end',
  'cannot have a dot followed by underscore or vice versa',
]

const UsernameCreationForm = () => {
  const { openModal, close } = useContext(SignupFormContext)
  const navigate = useNavigate()
  const [updateUsername, { isLoading, isSuccess, error, isError }] =
    useUpdateUsernameMutation()

  useEffect(() => {
    if(isSuccess){
      toast.success('update successful')
    }

    if(isError){
      const message = error.status === 'PARSING_ERROR' 
        ? 'Please login'
        : 'Username creation failed. Please try again'

      toast.error(message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      username: ''
    },
    validationSchema: usernameSchema,
    onSubmit: async (values, actions) => {
      try {
        const response = await updateUsername(values)
        const { status } = processResponse(response)

        if(status === 'PARSING_ERROR'){
          navigate('/user/login')
        } else if (status === 'success'){
          actions.setSubmitting(false)
          actions.resetForm()
          navigate(`${SIGNUP_PATH}${SIGNUP_PATHS.COMPLETED}`)
        }
      } catch (error) {
        console.log('Error in submission')
      }
    }
  })

  const usernameRulesModalHtml = 
    <StyledSignupRules>
      <span onClick={close}>✖</span>
      <ul>
      {usernameRules.map((rule, index) =>
        <li key={index}>
          {rule}
        </li>
      )}
      </ul>
    </StyledSignupRules>

  const input = {
    label: 'Username',
    type: 'text',
    placeholder: 'Username',
    name: 'username'
  }

  return (
    <>
      <StyledUsernameContainer>
        <h1>One last step... 🤞</h1>
        <span style={{opacity: .5}}>Please choose your username</span>
        <form onSubmit= {handleSubmit} autoComplete='off'>
          <FormInput 
            {...input}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={ errors[input.name] && touched[input.name] ? 'input-error' : '' }
          />
          {errors[input.name] && touched[input.name] && <FormError errorMessage={errors[input.name]}/>}
          <SubmitButton type='submit' disabled={isSubmitting}>Submit</SubmitButton>
        </form>
      </StyledUsernameContainer>
      { openModal && <Modal handleClose={close} text={usernameRulesModalHtml}/> }
    </>
  )
}

export default UsernameCreationForm
