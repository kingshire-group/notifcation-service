import { useInView } from 'react-intersection-observer'
import { SiteIntroductionSVGData } from './SVGData'
import WebAnimationImage from '../../assets/images/animationImage.png'
import { theme } from '../../data/theme'
import { 
  StyledSiteIntroduction, 
  StyledBookingStepsInformation, 
  StyledSearchInformationTop,
  StyledSVGContainer,
  StyledBookingStepsContent
} from './style'
import HiringSteps from './hiringSteps'
import { SITE } from '../../data/constants'
import { Button } from '../common.style'

const SiteIntroduction = () => {
  const { viewBox, pathData } = SiteIntroductionSVGData
  const { ref: bookingStepsRef, inView: bookingStepsAreVisible  } = useInView()

  const svgPaths = !pathData[0] ? <></> : pathData.map( (data, index) => 
    <path
      d = {data.dimension}
      stroke = {data.stroke}
      strokeWidth = {data.strokeWidth}
      fill = {data.fill}
      fillOpacity = {data.fillOpacity}
      key={index}
    />)

  var siteIntroductionMessageToDisplay_header = `Are you looking to hire ${SITE.workersTitle}?`
  var siteIntroductionMessageToDisplay_paragraph = `Hire Excellent ${SITE.workersTitle}, Fast. ${SITE.name} helps you hire elite ${SITE.workersTitle} around the world with ease.`
  const hireWorker = `Hire a ${SITE.workerTitle}`

  return(
    <StyledSiteIntroduction>
      <StyledSearchInformationTop>
        <div className='information-container'>
          <div className='kingsHire-motto'>
            <h1>{siteIntroductionMessageToDisplay_header}</h1>
            <p>{siteIntroductionMessageToDisplay_paragraph}</p>
          </div>
          <div className='search-area'>
            <Button backgroundColor = {theme.colors.blue}>{hireWorker}</Button>
          </div>
        </div>
        <img src={WebAnimationImage} alt='Kingshire Animation'/>
      </StyledSearchInformationTop>
      <StyledBookingStepsInformation>
        <StyledBookingStepsContent ref={bookingStepsRef}>
          <h2 className={bookingStepsAreVisible? 'animatedTitle': ''}> Hire a Kinglancer in 3 Simple Steps</h2>
          <HiringSteps bookingStepsAreVisible/>
        </StyledBookingStepsContent>
        <StyledSVGContainer 
          viewBox={ viewBox }
          xmlns='http://www.w3.org/2000/svg'
        >
          {svgPaths}
        </StyledSVGContainer>
      </StyledBookingStepsInformation>
    </StyledSiteIntroduction>
  )
}

export default SiteIntroduction