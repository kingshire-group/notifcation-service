import { StyledSVGPath } from "./style";

const SVGPath = ({dimension, strokeProperty, strokeWidthProperty, fillColorProperty, fillOpacityProperty}) => {
  return(
    <StyledSVGPath
      d = {dimension}
      stroke = {strokeProperty}
      strokeWidth = {strokeWidthProperty}
      fill = {fillColorProperty}
      fillOpacity = {fillOpacityProperty}
    />
  )
}

export default SVGPath;