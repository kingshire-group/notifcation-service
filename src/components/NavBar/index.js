import { StyledNavBarContainer } from './style'
import { DEVICE_SIZES } from '../../data/constants'
import { useMediaQuery } from 'react-responsive'
import NavBarList from './NavBarList'
import MobileNavBar from './MobileNavBar'

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_SIZES.mobile })

  return(
    <StyledNavBarContainer>
      { !isMobile && <NavBarList/> }
      { isMobile && <MobileNavBar /> }
    </StyledNavBarContainer>
  )
}

export default NavBar
