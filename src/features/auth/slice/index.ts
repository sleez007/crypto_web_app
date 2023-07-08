import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ILogin{
    email: string;
    password: string
}

interface LoginResponse{
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    isTwoFactorEnabled: boolean;
    createdAt: string;
    updatedAt:string;
    ipAddress: string;
    token: string;
}

interface IRegister{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

interface RegisterResponse{
    message: string;
    id: number
}

export const authSlice = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, ILogin>({
            query: (body: ILogin) => ({
                url: 'auth/login',
                body,
                method: 'POST'
            })
        }),
        signup: builder.mutation<RegisterResponse, IRegister>({
            query: (body: IRegister) => ({
                url: 'auth/create-account',
                body,
                method: 'POST'
            })
        }),
    })
});

export const { useLoginMutation, useSignupMutation } = authSlice

