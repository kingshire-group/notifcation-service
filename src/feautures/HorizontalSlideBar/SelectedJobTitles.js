import HorizontalSlideBar from ".";
import { listOfselectedJobTitles } from "../../data/jobTitles";
import { StyledJobTitleBar } from "./style"

const SelectedJobTitles = () => {
  return(
    <StyledJobTitleBar>
      <HorizontalSlideBar data = { listOfselectedJobTitles }/>
    </StyledJobTitleBar>
  )
}

export default SelectedJobTitles;