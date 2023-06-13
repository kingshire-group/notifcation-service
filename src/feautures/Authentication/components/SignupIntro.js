import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Google from './Google'
import { LOGIN_PATH, SIGNUP_PATH, SIGNUP_PATHS } from '../data/paths'
import { StyledSignupIntroContainer } from '../assets/authStyle'
import useResize from '../hooks/useResize'
import { SITE } from '../../../data/constants'
import { Button, StyledLink } from '../../../components/common.style'

const SignupIntro = () => {
  const signUpContainerRef = useRef()
  const { width: googleButtonWidth } = useResize(signUpContainerRef)
  const navigate = useNavigate()

  return (
    <StyledSignupIntroContainer>
      <div className='singup-intro'>
        <h1>Let's get started... 👋 </h1>
        <span>Join a pool of workers that are using their different
          talents to make a difference in the world.
        </span>
      </div>
      <div className='singup-options'>
        <div ref={signUpContainerRef}>
          <Google googleButtonWidth={googleButtonWidth}/>
          <h3 className='horizontal-or-separator'>or</h3>
          <Button className='email-signup-bttn' onClick={() => navigate(`${SIGNUP_PATH}${SIGNUP_PATHS.EMAIL}`)}>
            <p>Sign up with Email</p>
          </Button>
        </div>
        <p className='singup-agreement'>By singing up, you are agree to the
          <StyledLink> Terms and Conditions </StyledLink>and <StyledLink>Privacy Policy </StyledLink>
          of {SITE.name}.
        </p>
      </div>
      <p>
        Have an account already? <StyledLink to={ LOGIN_PATH }>Login</StyledLink>
      </p>
    </StyledSignupIntroContainer>
  )
}

export default SignupIntro