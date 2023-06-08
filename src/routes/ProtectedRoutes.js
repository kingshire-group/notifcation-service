import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import {
  selectCurrentAuthStatus,
  selectCurrentUser
} from "../feautures/Authentication/authSlice"

const ProtectedRoutes = () => {
  let pageToNavigate = '/user/login'

  const currentUser = useSelector(selectCurrentUser)
  const currentUserAuthStatus = useSelector(selectCurrentAuthStatus)

  const shouldAllowUserToPage = () => {
    if( !currentUser ) return false
    
    if( currentUserAuthStatus !== 'loggedin' ) return false

    if( currentUser._id === currentUser.username ) {
      pageToNavigate = '/user/signup/auth-username'
      return false
    }
  }

  return(
    shouldAllowUserToPage() ? <Outlet /> : <Navigate to={ pageToNavigate }/>
  )
}

export default ProtectedRoutes
