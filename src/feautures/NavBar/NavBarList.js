import { useDispatch } from "react-redux";
import { toggleOff } from "../BurgerButton/burgerButtonSlice";
import { buildPath } from "../../utils/buildPath";
import { NavigationListDesktopStyle, StyledNavLink } from "./style";
import { navigationOptions } from "../../data/navigation";

const NavBarList = ({StyledNavBarList = NavigationListDesktopStyle}) => {
  const dispatch = useDispatch();

  return(
    <StyledNavBarList>
      {navigationOptions.map(( navigationOption ) => 
        <li key={navigationOption.id}>
          <StyledNavLink 
            to = { buildPath(navigationOption) } 
            onClick = {() => dispatch(toggleOff())}
          >
            {navigationOption.name}
          </StyledNavLink>
        </li>
      )}
    </StyledNavBarList>
  )
}

export default NavBarList;
