import { apiSlice } from "../../app/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        googleAuth: builder.mutation({
            query: token => ({
                url: '/auth/google',
                method: 'Post',
                body: token
            })
        }),
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})

export const {
    useGoogleAuthMutation, 
    useLoginMutation
} = authApiSlice