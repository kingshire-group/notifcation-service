import { Route, Routes } from 'react-router-dom'
import { USER_PATHS } from '../data/paths'
import Profile from '../../../pages/Profile'

const UserRoutes = () => {
  return(
    <Routes>
      <Route path='/:id' element={<Profile />}>
        {/* <Route element={<ProtectedRoutes />}>
          <Route path='/auth-username' element={<Username />}/>
          <Route path='/completed' element={<SignupCompleted />}/>
        </Route> */}

      </Route>
    </Routes>
  )
}

export default UserRoutes
