import styled from "styled-components";
import { slideFromLeft, slideFromRight } from "../../app/GlobalStyles.style";

export const StyledPageRedirectContainer = styled.div`
  color: white;

  & .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.theme.heights.pageRedirectMssg};
    position: absolute;
    width: 100%;
    background-color: #4BB543;

    & section{
      display: flex;
      align-items: center;
      animation: ${slideFromRight} 5s;
    }
    
    & h2{
      margin: 0 1rem;
    }

    & .errorCircleChecknMark{
      font-size: 2rem;
      animation: ${slideFromLeft} 5s;
    }
  }
`