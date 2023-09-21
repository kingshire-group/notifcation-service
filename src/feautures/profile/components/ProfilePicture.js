import personalImage from '../assets/photos/timothyKinglancer.jpg'
import { StyledPersonalImageContainer } from '../assets/styles/profileStyle'

const ProfilePicture = () => {
  return (
    <StyledPersonalImageContainer>
      <img src={personalImage} alt="profile" className='personal-image'/>
    </StyledPersonalImageContainer>
  )
}

export default ProfilePicture
