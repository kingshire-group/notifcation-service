import Lottie from "react-lottie-player";
import unlockedAnimation from '../../assets/animations/unlocked.json'

const Unloncked = (props) => {
  return <Lottie animationData={unlockedAnimation} {...props} />;
}

export default Unloncked;