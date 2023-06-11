import SelectedJobsSlideBar from '../components/HorizontalSlideBar/SelectedJobsSlideBar'
import SiteIntroductionSection from '../components/SiteIntroduction'
import TopRatedKinglancers from '../components/TopRatedKinglancers'
import { StyledHomePageContainer } from './style'

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
