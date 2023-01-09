import { theme } from "./theme";

class SVGDataFormation{
  constructor(viewBox, pathData) {
    this.viewBox = viewBox;
    this.pathData = pathData
  }

  getViewBox(){
    return this.viewBox;
  }

  getPathData(){
    return this.pathData;
  }

}

const height = 550;
const pathData = [
  {
    dimension: `M0,64L26.7,74.7C53.3,85,107,107,160,96C213.3,85,267,43,320,32C373.3,21,427,43,480,85.3C533.3,128,587,192,640,192C693.3,192,747,128,800,101.3C853.3,75,907,85,960,101.3C1013.3,117,1067,139,1120,128C1173.3,117,1227,75,1280,74.7C1333.3,75,1387,117,1413,138.7L1440,160L1440,${height}L1413.3,${height}C1386.7,${height},1333,${height},1280,${height}C1226.7,${height},1173,${height},1120,${height}C1066.7,${height},1013,${height},960,${height}C906.7,${height},853,${height},800,${height}C746.7,${height},693,${height},640,${height}C586.7,${height},533,${height},480,${height}C426.7,${height},373,${height},${height},${height}C266.7,${height},213,${height},160,${height}C106.7,${height},53,${height},27,${height}L0,${height}Z`,
    stroke: 'none',
    strokeWidth: '0',
    fill: `${theme.colors.themeRed}`,
    fillOpacity: '1'
  }
]

export const SiteIntroductionSVGData = 
new SVGDataFormation(
  `0 0 1440 ${height}`,
  pathData
);
