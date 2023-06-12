import { Route, Routes } from 'react-router-dom'
import { USER_PATHS } from '../data/paths'

const UserRoutes = () => {
  return(
    <Routes>
      <Route path={USER_PATHS.PRO} element={<Signup />}>
        <Route index element={<SignupIntro />}/>
        <Route path={SIGNUP_PATHS.EMAIL} element={<EmailSignupForm />}/>

        {/* <Route element={<ProtectedRoutes />}>
          <Route path='/auth-username' element={<Username />}/>
          <Route path='/completed' element={<SignupCompleted />}/>
        </Route> */}
        
      </Route>
    </Routes>
  )
}

export default UserRoutes