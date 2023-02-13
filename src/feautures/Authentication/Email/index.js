import { useFormik } from "formik"
import FormInput from "./FormInput"
import { inputSchema } from './schema'
import { SubmitButton } from '../../../app/GlobalStyles.style'
import { 
  StyledSingUpForm 
} from "./style"
import {keyInformation} from '../../../data/keyInformation'

const EmailForm = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    validationSchema: inputSchema,
    onSubmit: (values) => {
      console.log('Form submited')
      console.log(values)
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
    <StyledSingUpForm onSubmit= {handleSubmit} autoComplete='off'>
      <div className="form-title">
        <h1>Let's fill this in... ✍📝</h1>
        <span style={{opacity: 0.5}}>
          In order to kick off your journey with {keyInformation.siteName}, 
          please complete the form below
        </span>
      </div>
      {inputs.map(input => 
        <FormInput key={input.id} {...input} 
          value={values[input.name]} 
          onChange={handleChange}
        />
      )}
      <SubmitButton>Submit</SubmitButton>
    </StyledSingUpForm>
  )
}

export default EmailForm;
