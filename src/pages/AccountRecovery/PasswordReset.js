/* import { Formik } from "formik"
import { SubmitButton } from '../../../app/GlobalStyles.style'
import { StyledPasswordContainer } from "./style"
import { StyledSingUpForm } from "../Signup/Email/style"
import FormInput from "../Signup/Email/FormInput"

const PasswordReset = ({height}) => {
  const passwordResetFormik = Formik({
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
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      name: 'password'
    },
    {
      id: 2,
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm Password',
      name: 'confirmpassword'
    }
  ]

  return (
    <StyledPasswordContainer containerHeight={height}>
      <StyledSingUpForm>
        <div className="form-title">
          <h1>Reset Password... 💪 </h1>
          <span style={{opacity: 0.5}}>Let's back into</span>
        </div>
        {inputs.map(input => 
          <FormInput key={input.id} {...input} 
            value={passwordResetFormik.values[input.name]} 
            onChange={passwordResetFormik.handleChange}
          />
        )}
        <SubmitButton>Submit</SubmitButton>
      </StyledSingUpForm>
    </StyledPasswordContainer>
  )
}

export default PasswordReset */