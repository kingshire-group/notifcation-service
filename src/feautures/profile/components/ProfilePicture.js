import personalImage from '../../assets/images/timothyKinglancer.jpg'
import { StyledPersonalImageContainer } from './style'

const ProfilePicture = () => {
  return (
    <StyledPersonalImageContainer>
      <img src={personalImage} alt="profile" className='personal-image'/>
    </StyledPersonalImageContainer>
  )
}

export default ProfilePicture