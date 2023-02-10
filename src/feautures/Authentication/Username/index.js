import { StyledUsernameContainer } from "./style"
import FormInput from "../Email/FormInput";
import { Formik } from "formik";
import { SubmitButton } from "../../../app/GlobalStyles.style";

const Username = () => {
  const usernameFormik = Formik({
    initialValues: {
      username: ''
    }
  }).props.value

  const input = {
    label: 'Username',
    type: 'text',
    placeholder: 'Username',
    name: 'username'
  };

  return (
    <StyledUsernameContainer>
      <h1>One last step... 🤞</h1>
      <span style={{opacity: .5}}>Please choose your username</span>
      <form>
        <FormInput 
          {...input}
          value={usernameFormik.values.name}
          onChange={usernameFormik.handleChange}
        />
        <span className="error">Error</span>
        <SubmitButton>Submit</SubmitButton>
      </form>
    </StyledUsernameContainer>
  )
}

export default Username;