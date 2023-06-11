import { configureStore } from '@reduxjs/toolkit'
import burgerButtonReducer from '../components/BurgerButton/burgerButtonSlice'
import { apiSlice } from './apiSlice'
import authReducer from '../feautures/authentication/authSlice'

export const store = configureStore({
	reducer: {
		burgerButton: burgerButtonReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer
	},
	middleware: getDefaultMiddleware => 
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production'
})
