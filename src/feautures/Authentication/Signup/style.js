import styled from "styled-components";

export const StyledSingUpContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: calc(${props => props.height}px - ${props => props.theme.heights.header});
  background-color: ${props => props.theme.colors.backgroundRed};
  & .signup-wrapper{
    margin: auto;
    width: 80%;
    padding: 2rem;
    border-radius: ${props => props.theme.borderRadius.form};

    & h1{
      margin-bottom: 1rem;
    }

    & p.singup-agreement, >p:last-child{
      font-size:${props => props.theme.fontSizes.mobile};
      text-align: center;
    }
  }
`

export const StyledSignupIntro = styled.div`
  & .singup-intro{
    & span{
      font-size:${props => props.theme.fontSizes.mobile};
      opacity: .5;
    }
  }
  & .singup-options{
    margin: 8rem 0;

    & .singup-agreement{
      margin-top: 6rem;
    }

    & .email-signup-bttn{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      color: white;
      border-color: ${props => props.theme.colors.backgroundMagniola};
      background-color: ${props => props.theme.colors.backgroundRed};
      border-radius: 2rem;
    }
  }
  
  & >p:last-child{
    text-align: center;
  }
`

export const StyledSignupCompletion = styled.div`
  background-color: ${props => props.theme.colors.success};
  color: white;

  & .welcome-message{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & span{
    flex: 2;
    font-size: ${props => props.theme.fontSizes.mobile};

    & h3{
      :last-child{
        font-weight: normal;
      }
    }
  }

  & .unlocked-animation{
    flex: 1;
    height: 6rem;
    width: 6rem;
    background-color: white;
    background-color: ${props => props.theme.colors.success};
  }

  & .next-step{
    display: flex;
    margin-top: 5rem;
    justify-content: space-around;

    & button{
      border-color: ${props => props.theme.colors.blue};
      background-color: ${props => props.theme.colors.blue};

      :first-child{
        background-color: white;
        color: ${props => props.theme.colors.blue};
      }
    }
  }
`