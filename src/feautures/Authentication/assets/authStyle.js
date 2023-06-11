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