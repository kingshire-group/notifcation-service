import SelectedJobTitles from "./HorizontalSlideBar/SelectedJobTitles";

import SiteIntroductionSection from "./siteIntroduction";
import { StyledHomePageContainer } from "./style";
import TopRatedKinglancers from "./TopRatedKinglancers";

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