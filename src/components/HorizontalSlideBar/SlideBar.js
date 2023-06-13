import { StyledHorizontalSlideContainer, StyledHorizontalSlideWrapper } from "./style"

const HorizontalSlideBar = ({ data }) => {
	const ListOfEntries = 
		<ul>
			{
				data.map( entry => <li key = {entry.id}>{entry.name}</li>)
			}
		</ul>
		

	return(
		<StyledHorizontalSlideContainer>
			<StyledHorizontalSlideWrapper>
				{ ListOfEntries }
				{ ListOfEntries }
			</StyledHorizontalSlideWrapper>
		</StyledHorizontalSlideContainer>
	)
}

export default HorizontalSlideBar
