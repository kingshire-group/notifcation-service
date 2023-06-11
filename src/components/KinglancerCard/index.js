import { 
  StyledKinglancerCardContainer,
  KinglancerImageCard,
  KinglancerCardDetails
} from './style'
import { SITE } from '../../data/constants'
import { BookButton } from '../common.style';
import { theme } from '../../data/theme';

const KinglancerCard = ({image}) => {
  return(
    <StyledKinglancerCardContainer>
      <KinglancerImageCard>
        <img src={image} alt={SITE.workerTitle}/>
      </KinglancerImageCard>
      <KinglancerCardDetails>
        <h3>Timothy Romelu</h3>
        <ul className='kinglancers-services'>
          <li key={1}>Software Engineering <span>{` £${80}`}</span></li>
          <li key={2}>Software Engineering <span>{` £${80}`}</span></li>
          <li key={3}>Software Engineering <span>{` £${80}`}</span></li>
        </ul>
        <div>
          <BookButton backgroundColor={theme.colors.success}>Book</BookButton>
        </div>
      </KinglancerCardDetails>
    </StyledKinglancerCardContainer>
  )
}

export default KinglancerCard
