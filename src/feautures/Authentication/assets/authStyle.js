import styled from "styled-components"

export const StyledSingUpForm = styled.form`

  & .form-title{
    margin-bottom: 4rem;

    & h1{
      margin-bottom: .5rem;
    }
    
  }

  & button{
    margin-top: 3rem;
  }
`

export const StyledSignUpRules = styled.div`
  padding: 1rem;

  & span{
    display: flex;
    justify-content: right;
    opacity: .5;
    margin-bottom: 1rem;
  }
  & ul{
    list-style-type: square;
    padding: 0 1rem;
  }
  & li{
    margin-bottom: 1rem;
  }
`

export const StyledUsernameContainer = styled.div`
  & form, button{
    margin-top: 4rem;
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
