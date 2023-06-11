/* import { Formik } from "formik";
import { SubmitButton } from '../../../app/GlobalStyles.style'
import { StyledPasswordContainer } from "./style"
import { StyledSingUpForm } from "../Signup/Email/style"
import FormInput from "../Signup/Email/FormInput";

const PasswordForgotten = ({height}) => {
  const forgotPasswordFormik = Formik({
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
      label: 'Email / Username',
      type: 'text',
      placeholder: 'Email / Username',
      name: 'userUniqueIdentifier'
    }
  ]


  return (
    <StyledPasswordContainer containerHeight={height}>
      <StyledSingUpForm>
        <div className="form-title">
          <h1>Forgot Password? 🤔 </h1>
          <span style={{opacity: 0.5}}>Don't worry! It happens. Please enter the address associated with your account</span>
        </div>
        {inputs.map(input => 
          <FormInput key={input.id} {...input} 
            value={forgotPasswordFormik.values[input.name]} 
            onChange={forgotPasswordFormik.handleChange}
          />
        )}
        <SubmitButton>Send Email</SubmitButton>
      </StyledSingUpForm>
    </StyledPasswordContainer>
  )
}

export default PasswordForgotten */