import { useContext } from 'react'
import { SignupFormContext } from '../../../pages/Signup'
import { theme } from '../../../data/theme'

const SignupPasswordInput = ({label, onChange, id, ...inputProps}) => {
  const { openModal, open, close } = useContext(SignupFormContext)
  
  return (
    <div className='formInput'>
      <label>
        Password
        <i> (check<span style={{color: theme.colors.blue}} 
          onClick={() => openModal? close() : open()}> rules</span>)
        </i>
      </label>
      <input {...inputProps} onChange={onChange}/>
    </div>
  )
}

export default SignupPasswordInput
