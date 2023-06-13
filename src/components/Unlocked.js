import Lottie from 'react-lottie-player'
import unlockedAnimation from '../feautures/authentication/data/unlocked.json'

const Unlocked = (props) => {
  return <Lottie animationData={unlockedAnimation} {...props} />
}

export default Unlocked