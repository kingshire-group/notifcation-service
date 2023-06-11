import { StyledKinglancerProfile } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KinglanceProfile = (
  {
    rating, 
    totalRating,
    totalJobsCompleted,
    numberOfYearsOfMembership
  }) => {

  return (
    <StyledKinglancerProfile>
      <div className="profile-key-poiints">
        <section>
          <FontAwesomeIcon icon={['far', 'star']} className='faIcon'/>
          <p><span>{rating}</span>({totalRating})</p>
        </section>
        <section>
          <FontAwesomeIcon icon='handshake-simple' className='faIcon'/>
          <p>{totalJobsCompleted} Jobs</p>
        </section>
        <section>
          <FontAwesomeIcon icon='briefcase' className='faIcon'/>
          <p>{ numberOfYearsOfMembership < 1 ? 
            '<1 year' : 
            ( numberOfYearsOfMembership===1 ? 
              '1 year' : `${numberOfYearsOfMembership} years`
            ) 
          }</p>
        </section>
      </div>
      <div className="profile-options">
        <div className="bookings">
          <FontAwesomeIcon icon={['far', 'calendar']} className='faIcon'/>
          <section>
            <p>Bookings</p>
            <span className="newBooking-mssg">4 new</span>
          </section>
          <FontAwesomeIcon icon='chevron-right' className='faIcon'/>
        </div>
        <div className="bio">
          <FontAwesomeIcon icon={['far', 'user']} className='faIcon'/>
          <section>
            <p>Bio</p>
          </section>
          <FontAwesomeIcon icon={'pen-clip'} className='faIcon'/>
        </div>
        <div className="services">
          <FontAwesomeIcon icon={['far', 'rectangle-list']} className='faIcon'/>
          <section>
            <p>Services</p>
          </section>
          <FontAwesomeIcon icon={'pen-clip'} className='faIcon'/>
        </div>
        <div className="portfolio">
         <FontAwesomeIcon icon={['far', 'images']} className='faIcon'/>
          <section>
            <p>Portfolio</p>
          </section>
          <FontAwesomeIcon icon={'pen-clip'} className='faIcon'/>
        </div>
        <div className="reviews">
          <FontAwesomeIcon icon={['far', 'star']} className='faIcon'/>
          <section>
            <p>Reviews</p>
            <span className="newReview-mms">2 new</span>
          </section>
          <FontAwesomeIcon icon='chevron-right' className='faIcon'/>
        </div>
      </div>
    </StyledKinglancerProfile>
  )
}

export default KinglanceProfile;
