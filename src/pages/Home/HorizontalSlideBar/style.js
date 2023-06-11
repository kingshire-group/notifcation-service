import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  0% {
		left: 0;
	}
	100% {
		left: -250%;
	}
`

export const StyledHorizontalSlideWrapper = styled.div`
  position: relative;
  display: flex;
  width: 500%; 
  animation: ${marquee} 20s linear infinite;
  padding: .5rem 0;

   & ul{
    display: flex;
    justify-content: space-around;
    width: 50%;
  }

  & li{
    white-space: nowrap;
    font-size: ${props => props.theme.fontSizes.main};
    color: ${ props => props.theme.colors.backgroundMagniola };
  }
`

export const StyledHorizontalSlideContainer = styled.div`
  overflow: hidden;
`

/*** Job Title Bar ***/
export const StyledJobTitleBar = styled.div`
  background-color: ${ props => props.theme.colors.blue };
`