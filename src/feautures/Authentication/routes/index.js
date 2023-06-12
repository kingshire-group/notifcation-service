import { Route, Routes } from 'react-router-dom'
import SignupIntro from '../components/SignupIntro'
import Signup from '../../../pages/Signup'
/* import Email from './Email'
import Username from "./Username" */
/* import SignupCompleted from './components/Signup/SignupCompleted'
import ProtectedRoutes from './ProtectedRoutes'
 */
const SignupRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<Signup />}>
        <Route index element={<SignupIntro />}/>
        {/* <Route path='/email' element={<Email />}/>

        <Route element={<ProtectedRoutes />}>
          <Route path='/auth-username' element={<Username />}/>
          <Route path='/completed' element={<SignupCompleted />}/>
        </Route> */}
        
      </Route>
    </Routes>
  )
}

export default SignupRoutes