import { keyInformation } from "../../data/keyInformation";
import KinglancerCard from "../../KinglancerCard";
import { 
  StyledTopRatedContainer,
  StyledKinglancersTopRatedCards
} from "./style";

import TimothyKinglancer from "../../../assets/images/timothyKinglancer.jpg"
import TimothyKinglancer2 from "../../../assets/images/timothyKinglancer2.jpg"
import TimothyKinglancer3 from "../../../assets/images/timothyKinglancer3.jpg"

const TopRatedKinglancers = () => {
  return(
    <StyledTopRatedContainer>
      <div className="TopRated-top">
        <h3>
          Logos, websites, book covers & more
        </h3>
        <h2>
          Checkout The Top Rated
          <span>{` ${keyInformation.workersTitle}`}</span>
        </h2>
      </div>
      <StyledKinglancersTopRatedCards>
        <ul className="topRated-cards">
          <li key={1}>
            <KinglancerCard image={TimothyKinglancer}/>
          </li>
          <li key={2}>
            <KinglancerCard image={TimothyKinglancer2}/>
          </li>
          <li key={3}>
            <KinglancerCard image={TimothyKinglancer3}/>
          </li>
        </ul>
      </StyledKinglancersTopRatedCards>
    </StyledTopRatedContainer>
  )
};

export default TopRatedKinglancers;