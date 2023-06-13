import { StyledLogo } from './style';
import KingsHireLogo from '../../assets/images/kingshireLogo.png'

const Logo = () => {
  return(
    <StyledLogo>
      <img src={KingsHireLogo} alt='Kingshire logo'/>
    </StyledLogo>
  )
}

export default Logo
