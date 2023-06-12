import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Marquee from 'react-fast-marquee'
import KinglancerProfile from '../../feautures/profile/components/KinglanceProfile'
import ClientProfile from '../../feautures/profile/components/ClientProfile'
import ProfilePicture from '../../feautures/profile/components/ProfilePicture';
import { SubmitButton } from '../../app/GlobalStyles.style'
import { 
  StyledProfileContainer, 
  StyledProfileLowerSection, 
  StyledProfileUpperSection 
} from "./style"
import { theme } from '../../data/theme'

const Profile = ({height}) => {
  const bookingNotification = 'New Booking for: Friday, 25th Jan, 2023'
  const fullName = 'Samuel Tizzo Lukombo'
  const username = `@sammyTheDon`
  const listOfServices = [
    {
      service: 'Software Designer',
      price:'£40'
    },
    {
      service: 'Graphics Designer',
      price:'£50'
    },
    {
      service: 'Hairdresser',
      price:'£60'
    }
  ]
  const type = 'client'
  const rating = 4.1
  const totalRating = 23
  const totalJobsCompleted = 4
  const memberSince = 2021

  const services = listOfServices.map((element, index) => 
    <li key={index+1}>
      <span>{element.service}</span>
      <span>/</span>
      <span>{element.price}</span>
    </li>
  )

  return(
    <StyledProfileContainer height={height}>
      <StyledProfileUpperSection>
        <div className='upper-section-wrapper'>
          <div className='page-title-and-navigation'>
            <FontAwesomeIcon icon={['far', 'circle-left']} className='faIcon'/>
            <h1>Your Profile</h1>
            <FontAwesomeIcon icon={'ellipsis'} className='faIcon'/>
          </div>
          <Marquee gradient={false} direction='right' className='booking-notification'>
            <span>
              {bookingNotification}
            </span>
          </Marquee>
          <div className='personal-information'>
            <ProfilePicture />
            <div className='basic-information'>
              <section className='names'>
                <h2>{fullName}</h2>
                <span>{username}</span>
              </section>
              <FontAwesomeIcon icon={'pen-clip'} className='faIcon penClipIcon'/>
            </div>
          </div>
          <div className='services'>
            <ul>{services}</ul>
          </div>
          <SubmitButton backgroundColor={theme.colors.success}>Book</SubmitButton>
        </div>
      </StyledProfileUpperSection>
      <StyledProfileLowerSection >
        <div className='lower-section-wrapper'>
          { type === 'kinglancer' ? 
            <KinglancerProfile 
              rating={rating} 
              totalRating = {totalRating}
              totalJobsCompleted = {totalJobsCompleted}
              numberOfYearsOfMembership = {(new Date()).getFullYear() - memberSince}
            /> : 
            <ClientProfile />
          }
        </div>
      </StyledProfileLowerSection>
    </StyledProfileContainer>
  )
}

export default Profile
