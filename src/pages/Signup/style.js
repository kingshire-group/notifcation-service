import styled from "styled-components"

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
