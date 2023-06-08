import { StyledUsernameContainer } from "./style"
import FormInput from "../Email/FormInput"
import { useFormik } from "formik"
import { SubmitButton } from "../../../../app/GlobalStyles.style"
import { createContext, useContext } from "react"
import { StyledSignUpRules } from "../Email/style"
import { SignUpFormContext } from ".."
import Modal from "../../../Modal"
import Error from "../Email/Error"
import { usernameSchema } from "./schema"
import { useCreateUsernameMutation } from "../../authApiSlice"
import { useNavigate } from "react-router-dom"
import { processResponse } from "../../../../utils/processResponse"

//export const UsernameFormContext = createContext()
 // username rules
 const usernameRules = [
  'be between 3 to 20 characters',
  'cannot have two repeated underscore or dots at the end',
  'cannot have a dot followed by underscore or vice versa',
]

const Username = () => {
  const { openModal, close } = useContext(SignUpFormContext)
  const navigate = useNavigate()
  const [createUsername, { isLoading, isSuccess, error, isError }] =
    useCreateUsernameMutation()
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      username: ''
    },
    validationSchema: usernameSchema,
    onSubmit: async (values, actions) => {
      try {
        console.log(values)
        //const response = await createUsername(values)
        //const { data, status } = processResponse(response)
       /*  if(status === 'success') {
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

  const usernameRulesModalHtml = 
    <StyledSignUpRules>
      <span onClick={close}>✖</span>
      <ul>
      {usernameRules.map((rule, index) =>
        <li key={index}>
          {rule}
        </li>
      )}
      </ul>
    </StyledSignUpRules>

  const input = {
    label: 'Username',
    type: 'text',
    placeholder: 'Username',
    name: 'username'
  };

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
          {errors[input.name] && touched[input.name] && <Error errorMessage={errors[input.name]}/>}
          <SubmitButton type="submit" disabled={isSubmitting}>Submit</SubmitButton>
        </form>
      </StyledUsernameContainer>
      { openModal && <Modal handleClose={close} text={usernameRulesModalHtml}/> }
    </>
  )
}

export default Username;