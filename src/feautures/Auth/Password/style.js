import styled from "styled-components";

export const StyledPasswordContainer = styled.div`
  height: calc(${props => props.containerHeight}px - ${props => props.theme.heights.header});
  display: flex;

  & >form{
    padding: 3rem;
    width: 100%;
    margin: auto;
  }
`