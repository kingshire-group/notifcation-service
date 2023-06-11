import { SITE } from '../../data/constants'
import '../../lib/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledHiringSteps } from './style'

const steps = [
  {
    title: 'Create Account',
    fontAwesomeIconString: 'user-plus',
    id: 1
  },
  {
    title: `Search a ${SITE.workerTitle}`,
    fontAwesomeIconString: 'magnifying-glass',
    id: 2
  },
  {
    title: `Hire a ${SITE.workerTitle}`,
    fontAwesomeIconString: 'handshake-simple',
    id: 3
  }
]
const HiringSteps = (props) => {
  const hiringStepsList = 
    steps.map( step => 
      <li key={step.id}>
        <FontAwesomeIcon icon = {step.fontAwesomeIconString} size='2x'/>
        <h3>{`${step.id}. ${step.title}`}</h3>
      </li>
    )

  return(
    <StyledHiringSteps>
      <ul className={props.bookingStepsAreVisible? 'animatedSteps':''}>
        {hiringStepsList}
      </ul>
    </StyledHiringSteps>
  )
}

export default HiringSteps
