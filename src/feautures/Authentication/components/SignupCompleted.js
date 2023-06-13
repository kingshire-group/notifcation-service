import React from 'react'
import {Button} from '../../../components/common.style'
import { StyledSignupCompletion } from '../assets/authStyle'
import { SITE } from '../../../data/constants'
const UnlockedAnimation = React.lazy(() => import('../../../components/Unlocked'))

const SignupCompleted = () => {
  return (
    <StyledSignupCompletion>
      <div className='welcome-message'>
        <UnlockedAnimation play className='unlocked-animation'/>
        <span>
          <h3>Welcome to {SITE.name},</h3>
          <h3>Joseph Mbuyamba</h3>
        </span>
      </div>
      <div className='next-step'>
        <Button>Go to Home</Button>
        <Button>Become a {SITE.workerTitle}</Button>
      </div>
    </StyledSignupCompletion>
  )
}

export default SignupCompleted
