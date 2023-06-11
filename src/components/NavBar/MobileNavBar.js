import { useSelector } from 'react-redux'
import BurgerButton from '../BurgerButton'
import NavBarList from './NavBarList'
import { StyledMobileNavBar, NavigationListMobileStyle } from './style'

const MobileNavBar = () => {
  const isOpen = useSelector(state => state.burgerButton.isOpen)

  return(
    <StyledMobileNavBar>
      <BurgerButton />
      { isOpen && <NavBarList StyledNavBarList = { NavigationListMobileStyle } /> }
    </StyledMobileNavBar>
  )
}

export default MobileNavBar
