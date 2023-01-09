import SelectedJobTitles from "../../../feautures/HorizontalSlideBar/SelectedJobTitles";
import SiteIntroductionSection from "../../../feautures/siteIntroduction";
import { StyledHomePageContainer } from "./style";
import TopRatedKinglancers from "../../../feautures/TopRatedKinglancers";

const Home = () => {
  return(
    <StyledHomePageContainer>
      <SelectedJobTitles />
      <SiteIntroductionSection />
      <TopRatedKinglancers />
    </StyledHomePageContainer>
  )
}

export default Home;