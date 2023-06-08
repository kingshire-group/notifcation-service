import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { 
  StyledSingUpContainer 
}from "./style"
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, createContext, useMemo } from 'react';
import { theme } from '../../../data/theme';

export const SignUpFormContext = createContext()
const SignupLayout = () => {
  const {height, } = useWindowDimensions();
  const [wrapperBackgroundColor, setWrapperBackgroundColor] = useState('white');
  const location = useLocation();
  const completedPagePath = '/user/signup/completed'

  useEffect(() => {
    const newBackgroundColor = 
      window.location.pathname !== completedPagePath ? 'white' : `${theme.colors.success}`
      setWrapperBackgroundColor(newBackgroundColor);
  }, [location])

  // password Modal
  const [ openModal, setOpenModal ] = useState(false)
  const providerValue = useMemo(() => 
    ({ openModal, setOpenModal }), [ openModal, setOpenModal ])

  const close = () => setOpenModal(false)
  const open = () => setOpenModal(true)
  console.log(providerValue)
  return(
    <SignUpFormContext.Provider value={ {open, close,...providerValue} }>
      <StyledSingUpContainer height={height}>
        <div className='signup-wrapper' 
          style={{ backgroundColor: wrapperBackgroundColor }}
        >
          <Outlet />
        </div>
      </StyledSingUpContainer>
    </SignUpFormContext.Provider>
  )
}

export default SignupLayout;