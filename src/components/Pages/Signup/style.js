import styled from "styled-components";

export const StyledSingUpContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: calc(${props => props.height}px - ${props => props.theme.heights.header});
  background-color: ${props => props.theme.colors.themeRed};
  & .signup-wrapper{
    margin: auto;
    width: 90%;
    padding: 1rem;
    border-radius: ${props => props.theme.borderRadius.form};

    & h1{
      margin-bottom: 1rem;
    }

    & p.singup-agreement, >p:last-child{
      font-size:${props => props.theme.fontSizes.mobile};
    }

    & >p:last-child{
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
    margin: 6rem 0;

    & .singup-agreement{
      margin-top: 2rem;
    }

    & .email-signup-bttn{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      color: white;
      border-color: ${props => props.theme.colors.themeBackgroundColor};
      background-color: ${props => props.theme.colors.themeRed};
      border-radius: 2rem;
    }
  } 
`

export const StyledGoogleAuthError = styled.span`
  display: flex;
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.mobile};
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  .errorCircleExclamationMark{
    font-size: 2.5rem;
    padding-right: .5rem;
  }
`

export const StyledSignupCompletion = styled.div`
  background-color: ${props => props.theme.colors.themeGreen};
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
    background-color: ${props => props.theme.colors.themeGreen};
  }

  & .next-step{
    display: flex;
    margin-top: 5rem;
    justify-content: space-around;

    & button{
      border-color: ${props => props.theme.colors.themeBlue};
      background-color: ${props => props.theme.colors.themeBlue};

      :first-child{
        background-color: white;
        color: ${props => props.theme.colors.themeBlue};
      }
    }
  }
`