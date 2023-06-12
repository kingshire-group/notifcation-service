import { useDispatch } from 'react-redux'
import { toggleOff } from '../BurgerButton/burgerButtonSlice'
import { NavigationListDesktopStyle, StyledNavLink } from './style'
import { MENU_OPTIONS } from '../../data/constants'

const NavBarList = ({StyledNavBarList = NavigationListDesktopStyle}) => {
  const dispatch = useDispatch()

  return(
    <StyledNavBarList>
      {MENU_OPTIONS.map(( option ) => 
        <li key={option.id}>
          <StyledNavLink 
            to = { option.path } 
            onClick = {() => dispatch(toggleOff())}
          >
            {option.name}
          </StyledNavLink>
        </li>
      )}
    </StyledNavBarList>
  )
}

export default NavBarList
