import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	user: null, 
	token: null, 
	authStatus: 'loggedout'
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { user, accessToken } = action.payload
			state.user = user
			state.token = accessToken
			state.authStatus = 'loggedin'
		},
		logOut: (state) => {
			state.user = null
			state.token = null
			state.authStatus = 'loggedout'
		}
	},
})

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentAuthStatus = (state) => state.auth.authStatus

export const { setCredentials, logOut, setAuthStatus } = authSlice.actions

export default authSlice.reducer
