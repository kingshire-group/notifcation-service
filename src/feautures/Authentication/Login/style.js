import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLoginPageContainer = styled.div`
  height: calc(${props => props.height}px - ${props => props.theme.heights.header});
  display: grid;
  grid-template-rows: 40% 55%;
  row-gap: 5%;

  & svg{
    height: 100%;
    margin: auto;
  }

  & .login-section{
    display: blok;
    padding: 0 3rem;
    padding-bottom: .5rem;

    & h1{
      margin-bottom: 2rem;
    }

    & .other-options{
      margin: auto;
      text-align: center;

      & p{
      margin: 1.5rem 0;
      text-align: center;
    }
    }
  }
`

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;

  & .LoginInputs{
    margin-bottom: 1.5rem;

    & >div:first-child{
      margin-bottom: 1rem;
    }
  }
` 

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: ${props => props.theme.colors.blue};
`