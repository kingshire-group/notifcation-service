import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import {
  selectCurrentAuthStatus,
  selectCurrentUser
} from '../feautures/authentication/authSlice'

const ProtectedRoutes = () => {
  const href = window.location.href
  let pageToNavigate = '/user/login'

  const currentUser = useSelector(selectCurrentUser)
  const currentUserAuthStatus = useSelector(selectCurrentAuthStatus)

  const shouldAllowUserToPage = () => {
    if( !currentUser ) return false
    
    if( currentUserAuthStatus !== 'loggedin' ) return false

    if( currentUser._id === currentUser.username && !href.includes('/user/signup/auth-username')) {
      pageToNavigate = '/user/signup/auth-username'
      return false
    }

    return true
  }

  return(
    shouldAllowUserToPage() ? <Outlet /> : <Navigate to={ pageToNavigate }/>
  )
}

export default ProtectedRoutes
