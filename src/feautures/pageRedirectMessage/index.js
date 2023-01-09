import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { hideMessage, selectCurrentLevel } from './pageRedirectMessageSlice'
import { StyledPageRedirectContainer } from "./styled"

const PageRedirectMessage = () => {
  const mssgShowLevel = useSelector(selectCurrentLevel);
  const dispatch = useDispatch();
  
  if(mssgShowLevel === 'show'){
    setTimeout(() => {
      dispatch(hideMessage())
    }, 4000);
  }

  return (
    <StyledPageRedirectContainer 
      className={mssgShowLevel==='hide' ? 'hide':'show'}>
      <div className='wrapper'>
        <FontAwesomeIcon className="errorCircleChecknMark" icon={['far', 'circle-check']}/>
        <section>
          <h2>Registration Successful</h2>
        </section>
      </div>
    </StyledPageRedirectContainer>
  )
}
export default PageRedirectMessage