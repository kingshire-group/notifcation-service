import { Route, Routes } from "react-router-dom"
import SignupIntro from "./components/Signup/SignupIntro"
import Email from './Email'
import Username from "./Username"
import SignupLayout from "./components/Signup"
import SignupCompleted from "./components/Signup/SignupCompleted"
import ProtectedRoutes from "../../../routes/ProtectedRoutes"

const SignupRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<SignupLayout />}>
        <Route index element={<SignupIntro />}/>
        <Route path="/email" element={<Email />}/>

        <Route element={<ProtectedRoutes />}>
          <Route path="/auth-username" element={<Username />}/>
          <Route path="/completed" element={<SignupCompleted />}/>
        </Route>
        
      </Route>
    </Routes>
  )
}

export default SignupRoutes