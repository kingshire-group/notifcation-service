import { SiteIntroductionSVGData } from "../../../data/SVGData";
import WebAnimationImage from '../../../assets/images/animationImage.png'
import { theme } from "../../../data/theme"
import { 
  StyledSiteIntroduction, 
  StyledBookingStepsInformation, 
  StyledSearchInformationTop,
  StyledSVGContainer,
  StyledBookingStepsContent
} from "./style"
import HiringSteps from "./hiringSteps";
import { keyInformation } from "../../../data/keyInformation"
import { Button } from "../../../app/GlobalStyles.style"
import { useInView } from "react-intersection-observer"

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

  var siteIntroductionMessageToDisplay_header = `Are you looking to hire ${keyInformation.workersTitle}?`
  var siteIntroductionMessageToDisplay_paragraph = `Hire Excellent ${keyInformation.workersTitle}, Fast. ${keyInformation.siteName} helps you hire elite ${keyInformation.workersTitle} around the world with ease.`
  const hireWorker = `Hire a ${keyInformation.workerTitle}`

  return(
    <StyledSiteIntroduction>
      <StyledSearchInformationTop>
        <div className="information-container">
          <div className="kingsHire-motto">
            <h1>{siteIntroductionMessageToDisplay_header}</h1>
            <p>{siteIntroductionMessageToDisplay_paragraph}</p>
          </div>
          <div className="search-area">
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

export default SiteIntroduction;