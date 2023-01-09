import { configureStore } from "@reduxjs/toolkit";
import burgerButtonReducer from "../feautures/BurgerButton/burgerButtonSlice";
import PageRedirectMessageSlice from '../feautures/pageRedirectMessage/pageRedirectMessageSlice'
import { apiSlice } from "./apiSlice";
import authReducer from '../feautures/Auth/authSlice'

export const store = configureStore({
	reducer: {
		burgerButton: burgerButtonReducer,
		redirectMessage: PageRedirectMessageSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer
	},
	middleware: getDefaultMiddleware => 
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production'
})