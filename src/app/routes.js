import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import { PATH_TO_HOME } from '../data/constants'
import { PATH_TO_USER } from '../feautures/profile'
import { PATH_TO_LOGIN, PATH_TO_SIGNUP } from '../feautures/authentication'
import SignupRoutes from '../feautures/authentication/routes'
import UserRoutes from '../feautures/profile/routes'

/* import useWindowDimensions from '../hooks/useWindowDimensions' */
/* import PasswordForgotten from '../feautures/Authentication/AccountRecovery/PasswordForgotten'
import PasswordReset from '../feautures/Authentication/AccountRecovery/PasswordReset' */

const AppRoutes = ({AppLayout}) => {
	/* const { height } = useWindowDimensions() */

  return(
		<Routes>
			<Route path={PATH_TO_HOME} element = { AppLayout }>
				<Route index element = {<Home />}/>
				<Route path={PATH_TO_LOGIN} element = {<Login />}/>
				<Route path={`${PATH_TO_SIGNUP}/*`} element = {<SignupRoutes />}/>
				<Route path={`${PATH_TO_USER}/*`} element = {<UserRoutes />}/>
				{/* <Route path='dfdhjk'>
					<Route path='login' element = {<Login height={height}/>}/>
					<Route path='signup/*' element={<SignupRoutes height={height}/>} />
					<Route path='password'>
						<Route path='forgotten' element = {<PasswordForgotten height={height}/>}/>
						<Route path='reset' element = {<PasswordReset height={height}/>}/>
					</Route>
				</Route> */}
			</Route>
		</Routes>
	)
}

export default AppRoutes
