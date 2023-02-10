import { SiteIntroductionSVGData } from "../../../data/SVGData";
import SVG from "../../SVG";
import WebAnimationImage from '../../../assets/images/animationImage.png';
import { theme } from "../../../data/theme";
import { 
  StyledSiteIntroduction, 
  StyledBookingStepsInformation, 
  StyledSearchInformationTop, 
  StyledBookingStepsContent
} from "./style";
import HiringSteps from "./hiringSteps";
import { keyInformation } from "../../../data/keyInformation";
import { Button } from "../../../app/GlobalStyles.style";
import { useInView } from "react-intersection-observer";

const SiteIntroduction = () => {
  const { viewBox, pathData } = SiteIntroductionSVGData;
  const { ref: bookingStepsRef, inView: bookingStepsAreVisible  } = useInView();

  var siteIntroductionMessageToDisplay_header = `Are you looking to hire ${keyInformation.workersTitle}?`
  var siteIntroductionMessageToDisplay_paragraph = `Hire Excellent ${keyInformation.workersTitle}, Fast. ${keyInformation.siteName} helps you hire elite ${keyInformation.workersTitle} around the world with ease.`
  const hireWorker = `Hire a ${keyInformation.workerTitle}`;

  return(
    <StyledSiteIntroduction>
      <StyledSearchInformationTop>
        <div className="information-container">
          <div className="kingsHire-motto">
            <h1>{siteIntroductionMessageToDisplay_header}</h1>
            <p>{siteIntroductionMessageToDisplay_paragraph}</p>
          </div>
          <div className="search-area">
            <Button backgroundColor = {theme.colors.themeBlue}>{hireWorker}</Button>
          </div>
        </div>
        <img src={WebAnimationImage} alt='Kingshire Animation'/>
      </StyledSearchInformationTop>
      <StyledBookingStepsInformation>
        <StyledBookingStepsContent ref={bookingStepsRef}>
          <h2 className={bookingStepsAreVisible? 'animatedTitle': ''}> Hire a Kinglancer in 3 Simple Steps</h2>
          <HiringSteps bookingStepsAreVisible/>
        </StyledBookingStepsContent>
        <SVG 
          viewBoxProperty = { viewBox }
          pathData = { pathData }
        />
      </StyledBookingStepsInformation>
    </StyledSiteIntroduction>
  )
}

export default SiteIntroduction;