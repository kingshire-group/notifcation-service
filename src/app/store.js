import { configureStore } from "@reduxjs/toolkit";
import burgerButtonReducer from "../feautures/BurgerButton/burgerButtonSlice";
import { apiSlice } from "./apiSlice";
import authReducer from '../feautures/Authentication/authSlice'

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