import { Route, Routes } from "react-router-dom"
import SignupIntro from "./SignupIntro"
import Email from './Email'
import Username from "./Username"
import SignupLayout from "."
import SignupCompleted from "./SignupCompleted"

const SignupRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<SignupLayout />}>
        <Route index element={<SignupIntro />}/>
        <Route path="/email" element={<Email />}/>
        <Route path="/auth-username" element={<Username />}/>
        <Route path="/completed" element={<SignupCompleted />}/>
      </Route>
    </Routes>
  )
}

export default SignupRoutes