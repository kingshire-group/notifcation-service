import { Route, Routes } from 'react-router-dom'
import { USER_PATHS } from '../data/paths'
import Signup from '../../../pages/Signup'
import SignupIntro from '../../authentication/components/SignupIntro'
import EmailSignupForm from '../../authentication/components/EmailSignupForm'
import { SIGNUP_PATHS } from '../../authentication/data/paths'

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