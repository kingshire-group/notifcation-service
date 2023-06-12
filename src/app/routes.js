import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignupRoutes from '../feautures/authentication/routes'

/* import Login from '../pages/Login' */
/* import Profile from '../pages/Profile' */
/* import useWindowDimensions from '../hooks/useWindowDimensions' */
/* import PasswordForgotten from '../feautures/Authentication/AccountRecovery/PasswordForgotten'
import PasswordReset from '../feautures/Authentication/AccountRecovery/PasswordReset' */

const AppRoutes = ({AppLayout}) => {
	/* const { height } = useWindowDimensions() */

  return(
		<Routes>
			<Route path='/' element = { AppLayout }>
				<Route index element = {<Home />}/>
				<Route path='signup' element = {<SignupRoutes />}/>
				<Route path='login' element = {<p> login Page</p>}/>
				<Route path='user'>
					{/* <Route index element = {<Login />}/>
					<Route path='login' element = {<Login height={height}/>}/>
					<Route path='signup/*' element={<SignupRoutes height={height}/>} /> */}
					{/* <Route path='password'>
						<Route path='forgotten' element = {<PasswordForgotten height={height}/>}/>
						<Route path='reset' element = {<PasswordReset height={height}/>}/>
					</Route> */}
				</Route>
			</Route>
		</Routes>
	)
}

export default AppRoutes