import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import {
  selectCurrentAuthStatus,
  selectCurrentUser
} from '../authSlice'
import { SIGNUP_PATHS } from '../data/paths'
import { PATH_TO_LOGIN, PATH_TO_SIGNUP } from '..'

const ProtectedRoutes = () => {
  console.log(PATH_TO_LOGIN)
  const href = window.location.href
  const loginPath = `/${PATH_TO_LOGIN}`
  const userCreationPath = `${PATH_TO_SIGNUP}${SIGNUP_PATHS.USERNAME}`
  
  const currentUser = useSelector(selectCurrentUser)
  const currentUserAuthStatus = useSelector(selectCurrentAuthStatus)

  let pageToNavigate = loginPath

  const shouldAllowUserToPage = () => {
    if( !currentUser ) return false
    
    if( currentUserAuthStatus !== 'loggedin' ) return false

    if( currentUser._id === currentUser.username && !href.includes(userCreationPath)) {
      pageToNavigate = userCreationPath
      return false
    }

    return true
  }

  return(
    shouldAllowUserToPage() ? <Outlet /> : <Navigate to={ pageToNavigate }/>
  )
}

export default ProtectedRoutes
