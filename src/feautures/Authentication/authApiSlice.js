import { apiSlice } from '../../App/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		createProfile: builder.mutation({
			query: payload => ({
				url: '/auth/signup/email',
				method: 'Post',
				body: { ...payload }
			})
		}),
		updateUsername: builder.mutation({
			query: payload => ({
				url: '/auth/update/username',
				method: 'Post',
				body: { ...payload }
			})
		}),
		googleAuth: builder.mutation({
			query: token => ({
				url: '/auth/google',
				method: 'Post',
				body: token
			})
		}),
		login: builder.mutation({
			query: credentials => ({
				url: '/auth/login',
				method: 'POST',
				body: { ...credentials }
			})
		}),
	})
})

export const {
	useCreateProfileMutation,
	useUpdateUsernameMutation,
	useGoogleAuthMutation, 
	useLoginMutation
} = authApiSlice