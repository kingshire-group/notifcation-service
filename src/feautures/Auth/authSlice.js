import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	user: null, 
	token: null, 
	authStatus: {
		status: null,
		message: null
	}
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { user, accessToken } = action.payload
			state.user = user
			state.token = accessToken
		},
		logOut: (state) => {
			state.user = null
			state.token = null
		},
		setAuthStatus: (state, action) => {
			state.authStatus.status = action.payload.status
			state.authStatus.message = action.payload.message
		}
	},
})

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentAuthStatus = (state) => state.auth.authStatus

export const { setCredentials, logOut, setAuthStatus } = authSlice.actions

export default authSlice.reducer

