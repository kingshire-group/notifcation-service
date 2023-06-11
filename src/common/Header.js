import { StyledHeader } from './Header/style'
import NavBar from '../../feautures/NavBar'
import Logo from '../../feautures/Logo'

const Header = () => {
  return(
    <StyledHeader>
      <Logo/>
      <NavBar></NavBar>
    </StyledHeader>
  );
}

export default Header
