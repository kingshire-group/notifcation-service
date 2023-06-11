import styled from 'styled-components'
import { slideFromLeft, slideFromRight } from '../common.style'

export const StyledSiteIntroduction = styled.div`
  background-color: ${ props => props.theme.colors.backgroundMagniola };
`

export const StyledSearchInformationTop = styled.div`
  position: relative;
  margin-bottom: 4rem;

  & .kingsHire-motto{
    padding: 2rem 1rem;
    margin-bottom: 4rem;
    text-align: center;
  }

  & .search-area{
    text-align: center;
    width: 60%;
  }

  & .kingsHire-motto h1{
    margin-bottom: .75rem;
  }
  
  & .kingsHire-motto p{
    font-size: ${props => props.theme.fontSizes.mobile};
  }

  & .search-area{
    align-self: center;
  }

  & img{
    height: 15vh;
    width: 15vh;
    position: absolute;
    top: 75%;
    right: 0;
  }
`

/*------------*/


export const StyledBookingStepsInformation = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
`
export const StyledBookingStepsContent = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: calc(50% + 1.5rem);
  transform: translate(-50%,-50%);
  padding: 0 .5rem;

  & .animatedTitle{
    animation: ${slideFromLeft} 3s;
  }
`

export const StyledSVGContainer = styled.svg`
  display: block;
  width: calc(110% + 1.5rem);
`

export const StyledHiringSteps = styled.div`
  margin-top: 2rem;

  & ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & .animatedSteps{
    animation: ${slideFromRight} 3s;
  }
`
