import Backdrop from "./Backdrop"
import { StyledModal } from "./style"

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}
const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        drag
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {text}
      </StyledModal>
    </Backdrop>
    
  )
}

export default Modal