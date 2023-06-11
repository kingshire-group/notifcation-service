import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
/* import Login from '../pages/Login' */
/* import Profile from '../pages/Profile' */
/* import SignupRoutes from '../feautures/Authentication/Signup/routes' */
/* import useWindowDimensions from '../hooks/useWindowDimensions' */
/* import PasswordForgotten from '../feautures/Authentication/AccountRecovery/PasswordForgotten'
import PasswordReset from '../feautures/Authentication/AccountRecovery/PasswordReset' */
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = ({AppLayout}) => {
	/* const { height } = useWindowDimensions() */

  return(
		<Routes>
			<Route path='/' element = { AppLayout }>
				<Route index element = {<Home />}/>
				<Route path='user'>
					{/* <Route index element = {<Login />}/>
					<Route path='login' element = {<Login height={height}/>}/>
					<Route path='signup/*' element={<SignupRoutes height={height}/>} /> */}
					{/* <Route path='password'>
						<Route path='forgotten' element = {<PasswordForgotten height={height}/>}/>
						<Route path='reset' element = {<PasswordReset height={height}/>}/>
					</Route> */}
					<Route path='logout' element = {<p> logout Page</p>}/>
					<Route path='forgotten-password' element = {<p> Forgotten Password Page</p>}/>
					<Route path='switch-to-client' element = {<p> switch to client Page</p>}/>
					<Route path='switch-to-worker' element = {<p> swicth to worker Page</p>}/>
					<Route path='become-a-client' element = {<p> become a client Page</p>}/>
				</Route>
			</Route>
			<Route element={<ProtectedRoutes />}>
				{/* <Route path='user-profile/:id' element={<Profile height={height}/>} /> */}
			</Route>
		</Routes>
	)
}

export default AppRoutes