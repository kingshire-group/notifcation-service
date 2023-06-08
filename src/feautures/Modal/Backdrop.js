import { StyledBackdrop } from './style'

const Backdrop = ({children, onClick}) => {
  return (
    <StyledBackdrop 
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </StyledBackdrop>
  )
}

export default Backdrop