import { StyledNavBarContainer } from "./style";
import { DeviceSize } from "../../data/responsive"
import { useMediaQuery } from "react-responsive";
import NavBarList from "./NavBarList";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

  return(
    <StyledNavBarContainer>
      { !isMobile && <NavBarList/> }
      { isMobile && <MobileNavBar /> }
    </StyledNavBarContainer>
  );
}

export default NavBar;
