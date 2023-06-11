import Lottie from "react-lottie-player";
import unlockedAnimation from '../../../../assets/animations/unlocked.json'

const Unlocked = (props) => {
  return <Lottie animationData={unlockedAnimation} {...props} />
}

export default Unlocked