import styled from 'styled-components'

export const AppContainer = styled.div``

export const StyledHeader = styled.header`
  width: ${ props => props.theme.widths.full };
  height: ${ props => props.theme.heights.header};
  box-shadow: 0 .1rem .3rem rgba(15, 15, 15, .13);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${ props => props.theme.paddings.mainHorizontal };
`