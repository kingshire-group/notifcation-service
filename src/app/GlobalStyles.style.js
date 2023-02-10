import { Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { theme } from "../data/theme";

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

  .formInput{
    margin-bottom: 1.5rem;

    & :last-child{
      margin-bottom: 0;
    }
  }
`
export const Button = styled.button`
  border-radius: ${props => props.theme.borderRadius.button};
  font-size: ${props => props.theme.fontSizes.button};
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  background-color: ${props => props.backgroundColor};
  border: .1rem solid ${props => props.backgroundColor};
  color: ${props => props.theme.colors.backgroundMagniola};
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  outline: none;
  overflow: hidden;

  &:disabled{
    opacity: .5;
  }

  &:focus {
    outline: 0;
  }
`

export const BookButton = styled(Button)`
  width: 10rem;
  padding: 1rem 0;
`
export const SubmitButton = styled(Button)`
  background-color: ${props => props.theme.colors.blue};
  border: .1rem solid ${props => props.theme.colors.blue};
  color: white;
  width: 100%;
  border-radius: 2rem;
`

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.blue};
`

export const slideFromLeft = keyframes`
  from{
    transform: translateX(-50px);
    opacity: 0;
  }

  to{
      transform: translateX(0);
      opacity: 1;
  }
`

export const slideFromRight = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  } 
  to  {
    transform: translateX(0);
    opacity: 1;
   } 
`