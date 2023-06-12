import React from "react";
import {StyledSignupCompletion} from '../../../pages/Signup/style'
import {keyInformation} from '../../../data/keyInformation'
import {Button} from '../../../app/GlobalStyles.style'
const UnlockedAnimation = React.lazy(() => import('../../Lottie/Unloncked'))


const SignupCompleted = () => {
  return (
    <StyledSignupCompletion>
      <div className="welcome-message">
        <UnlockedAnimation play className='unlocked-animation'/>
        <span>
          <h3>Welcome to {keyInformation.siteName},</h3>
          <h3>Joseph Mbuyamba</h3>
        </span>
      </div>
      <div className="next-step">
        <Button>Go to Home</Button>
        <Button>Become a {keyInformation.workerTitle}</Button>
      </div>
    </StyledSignupCompletion>
  )
}

export default SignupCompleted
