import styled, { createGlobalStyle } from 'styled-components'
import { theme } from '../data/theme'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body {
    font: ${theme.fontSizes.mobile} Open-Sans, Helvetica, Sans-Serif;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
    font-size: inherit;
  }

  span{
    font-size: ${theme.fontSizes.mobile};
  }

  label{
    display: block;
    font-size: ${theme.fontSizes.mobile};
  }

  input{
    width: 100%;
    border-radius: .5rem;
    padding: 1rem .5rem;
    border: .1rem solid gray;
    margin: .5rem 0;
    font-size: ${theme.fontSizes.mobile};

    :focus{
      border-color: ${theme.colors.blue};
      outline: none;
    }
  }

  .show{
    display: block;
  }
  .hide{
    display: none;
  }
  .error{
    font-size: ${theme.fontSizes.mobile};
    color: ${theme.colors.error};
  }
  .input-error{
    border-color: ${theme.colors.error};
  }
  .penClipIcon{
    font-size: 1.3rem;
    border-bottom: .1rem solid white;
  }

  & .horizontal-or-separator{
    display: flex;
    flex-direction: row;
    margin: 1.5rem 0;
    padding: 0 1rem;
  }
    
  & .horizontal-or-separator:before,
  & .horizontal-or-separator:after{
      content: "";
      flex: 1 1;
      border-bottom: .13rem solid black;
      opacity: .5;
      margin: auto;
  }

  & .horizontal-or-separator:before{
    margin-right: 1rem;
  }

  & .horizontal-or-separator:after{
    margin-left: 1rem;
  }

  .form-input-container{
    margin-bottom: 1.5rem;

    & :last-child{
      margin-bottom: 0;
    }
  }
`

export const AppContainer = styled.div``
