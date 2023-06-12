import { Route, Routes } from 'react-router-dom'
import SignupIntro from '../components/SignupIntro'
import Signup from '../../../pages/Signup'
import EmailSignupForm from '../components/EmailSignupForm'
import { SIGNUP_PATHS } from '../data/paths'

/* import Username from "./Username" */
/* import SignupCompleted from './components/Signup/SignupCompleted'
import ProtectedRoutes from './ProtectedRoutes'
 */

const SignupRoutes = () => {
  return(
    <Routes>
      <Route path={SIGNUP_PATHS.INTRO} element={<Signup />}>
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

export default SignupRoutes