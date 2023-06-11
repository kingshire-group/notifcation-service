import styled from "styled-components";

export const StyledKinglancerCardContainer = styled.div`
  box-shadow: 0 .1rem .2rem rgba(0,0,0,0.5), 
              0 .2rem .4rem rgba(0,0,0,0.5), 
              0 .4rem .8rem rgba(0,0,0,0), 
              0 .8rem 1.6rem rgba(0,0,0,0);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

export const KinglancerImageCard = styled.section`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  & img{
    height: 40vh;
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`

export const KinglancerCardDetails = styled.section`
  padding: 1rem 0;
  margin: 1rem 0;
  & h3{
    line-height: 2;
    font-size: 1.3rem;
  }

  & .kinglancers-services{
    margin-bottom: 2rem;
    margin-top: 1rem;

    & li{
      line-height: 1.5rem;
      font-size: ${props => props.theme.fontSizes.mobile};
      font-weight: bold;
    }

    & span{
        opacity: 1;
        color: ${props => props.theme.colors.backgroundRed};
      }
  }
`