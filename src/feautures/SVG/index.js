import { StyledSVGContainer } from "./style";
import SVGPath from "./SVGPath";


const SVG = ({viewBoxProperty, pathData}) => {
  const Paths = !pathData[0] ? <></> : pathData.map( (data, index) => 
    <SVGPath
      dimension={data.dimension}
      strokeProperty={data.stroke}
      strokeWidthProperty={data.strokeWidth}
      fillColorProperty={data.fill}
      fillOpacityProperty={data.fillOpacity}
      key={index}
    />)

  return(
    <StyledSVGContainer 
      viewBox={viewBoxProperty}
      xmlns='http://www.w3.org/2000/svg'
    >
      {Paths}
    </StyledSVGContainer>
  )
}

export default SVG;
