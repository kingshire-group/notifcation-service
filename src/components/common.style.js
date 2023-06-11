import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

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
    opacity: .35;
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

export const StyledFormErrorMessage = styled.p`
  font-style: italic;
	color: ${props => props.theme.colors.error};
`