import SelectedJobsSlideBar from '../components/HorizontalSlideBar/SelectedJobsSlideBar'
import SiteIntroductionSection from '../components/SiteIntroduction'
import { StyledHomePageContainer } from './style'
import TopRatedKinglancers from '../components/TopRatedKinglancers'

const Home = () => {
  return(
    <StyledHomePageContainer>
      <SelectedJobsSlideBar />
      <SiteIntroductionSection />
      <TopRatedKinglancers />
    </StyledHomePageContainer>
  )
}

export default Home