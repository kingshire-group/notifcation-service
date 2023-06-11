import { useEffect, useRef } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Google from "../Google"
import { StyledSignupIntro } from "./style";
import useResize from "../../../hooks/useResize"
import {keyInformation} from '../../../data/keyInformation'
import { Button, StyledLink } from '../../../app/GlobalStyles.style'
import { 
  StyledGoogleAuthError
} from "./style"

const SignupIntro = () => {
  const signUpContainerRef = useRef();
  const { width: googleButtonWidth } = useResize(signUpContainerRef)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <StyledSignupIntro>
      <div className='singup-intro'>
        <h1>Let's get started... 👋 </h1>
        <span>Join a pool of workers that are using their different
          talents to make a difference in the world.
        </span>
      </div>
      <div className="singup-options">
        <div ref={signUpContainerRef}>
          <Google googleButtonWidth={googleButtonWidth}/>
          <h3 className="horizontal-or-separator">or</h3>
          <Button className="email-signup-bttn" onClick={() => navigate('/user/signup/email')}>
            <p>Sign up with Email</p>
          </Button>
        </div>
        <p className='singup-agreement'>By singing up, you are agree to the
          <StyledLink> Terms and Conditions </StyledLink>and <StyledLink>Privacy Policy </StyledLink>
          of {keyInformation.siteName}.
        </p>
      </div>
      <p>
        Have an account already? <StyledLink to='/user/login'>Login</StyledLink>
      </p>
    </StyledSignupIntro>
  )
}

export default SignupIntro