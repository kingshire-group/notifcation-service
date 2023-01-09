import { StyledHeader } from "./style";
import NavBar from "../../feautures/NavBar";
import Logo from "../Logo";
//import SelectedJobTitles from "../../feautures/HorizontalSlideBar/SelectedJobTitles";

const Header = () => {
  return(
    <StyledHeader>
      <Logo/>
      <NavBar></NavBar>
    </StyledHeader>
  );
}

export default Header;
