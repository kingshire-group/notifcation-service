import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { 
  StyledSingUpContainer 
}from "./style"
import { Outlet, useLocation } from 'react-router-dom';
import PageRedirectMessage from '../../../feautures/pageRedirectMessage';
import { useState, useEffect } from 'react';
import { theme } from '../../../data/theme';

const SignupLayout = () => {
  const {height, } = useWindowDimensions();
  const [wrapperBackgroundColor, setWrapperBackgroundColor] = useState('white');
  const location = useLocation();
  const completedPagePath = '/user/signup/completed'

  useEffect(() => {
    const newBackgroundColor = 
      window.location.pathname !== completedPagePath ? 'white' : `${theme.colors.themeGreen}`
      setWrapperBackgroundColor(newBackgroundColor);
  }, [location]);

  return(
    <StyledSingUpContainer height={height}>
      <PageRedirectMessage />
      <div className='signup-wrapper' 
        style={{ backgroundColor: wrapperBackgroundColor }}
      >
        <Outlet />
      </div>
    </StyledSingUpContainer>
  )
}

export default SignupLayout;