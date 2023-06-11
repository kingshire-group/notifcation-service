import { StyledHeader } from './style'
import NavBar from '../components/NavBar'
import Logo from '../components/Logo'

const Header = () => {
  return(
    <StyledHeader>
      <Logo/>
      <NavBar></NavBar>
    </StyledHeader>
  )
}

export default Header
