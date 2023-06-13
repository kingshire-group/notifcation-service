import styled from "styled-components";

export const StyledTopRatedContainer = styled.div`
  margin: 2rem 0;

  & .TopRated-top{
    margin: auto;
    max-width: 75%;
    text-align: center;

    & h3{
      opacity: .5;
    }

    & h2{
      line-height: 2;
      font-weight: 525;
    }

    & span{
        color: ${props => props.theme.colors.blue};
        font-weight: 600;
    }
  }
`

export const StyledKinglancersTopRatedCards = styled.div`
  padding: 1rem;
  overflow-y: hidden;

  & .topRated-cards{
    overflow-y: hidden;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 5%;
    text-align: center;
    width: 100vh;
  }
`
