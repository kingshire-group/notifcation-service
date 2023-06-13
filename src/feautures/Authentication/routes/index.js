import { Route, Routes } from 'react-router-dom'
import SignupIntro from '../components/SignupIntro'
import Signup from '../../../pages/Signup'
import EmailSignupForm from '../components/EmailSignupForm'
import { SIGNUP_PATHS } from '../data/paths'
import UsernameCreationForm from '../components/UsernameCreationForm'
import ProtectedRoutes from './ProtectedRoutes'
import SignupCompleted from '../components/SignupCompleted'

const SignupRoutes = () => {
  return(
    <Routes>
      <Route path={SIGNUP_PATHS.INTRO} element={<Signup />}>
        <Route index element={<SignupIntro />}/>
        <Route path={SIGNUP_PATHS.EMAIL} element={<EmailSignupForm />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path={SIGNUP_PATHS.USERNAME} element={<UsernameCreationForm />}/>
          <Route path={SIGNUP_PATHS.COMPLETED} element={<SignupCompleted />}/>
        </Route>
        
      </Route>
    </Routes>
  )
}

export default SignupRoutes