import HorizontalSlideBar from './SlideBar'
import { SELECTED_JOBS } from '../../data/constants'
import { StyledJobTitleBar } from './style'

const SelectedJobsSlideBar = () => {
  return(
    <StyledJobTitleBar>
      <HorizontalSlideBar data = { SELECTED_JOBS }/>
    </StyledJobTitleBar>
  )
}

export default SelectedJobsSlideBar
