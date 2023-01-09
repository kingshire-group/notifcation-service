import { 
  StyledKinglancerCardContainer,
  KinglancerImageCard,
  KinglancerCardDetails
} from "./style";
import {keyInformation} from '../../data/keyInformation'
import { BookButton } from "../../app/GlobalStyles.style";
import { theme } from "../../data/theme";

const KinglancerCard = ({image}) => {
  return(
    <StyledKinglancerCardContainer>
      <KinglancerImageCard>
        <img src={image} alt={keyInformation.workerTitle}/>
      </KinglancerImageCard>
      <KinglancerCardDetails>
        <h3>Timothy Romelu</h3>
        <ul className="kinglancers-services">
          <li key={1}>Software Engineering <span>{` £${80}`}</span></li>
          <li key={2}>Software Engineering <span>{` £${80}`}</span></li>
          <li key={3}>Software Engineering <span>{` £${80}`}</span></li>
        </ul>
        <div>
          <BookButton backgroundColor={theme.colors.themeGreen}>Book</BookButton>
        </div>
      </KinglancerCardDetails>
    </StyledKinglancerCardContainer>
  )
}

export default KinglancerCard;