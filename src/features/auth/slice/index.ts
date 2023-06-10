import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User{
    email: string;
    firstName: string;
    lastName: string;
    id: number;
}

interface Token{
    accessToken: string;
    refreshToken: string;
}

export interface AuthState {
  loaded: boolean;
  error: string | null;
  user: User | null;
  token: Token | null;
  email: string;
}

export const initialState: AuthState = {
  loaded: true,
  error: null,
  user: null,
  token: null,
  email: 'okkokokokokokokok@mmm.com'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) =>{
            state.loaded = false;
        },
        signup: (state) =>{
            state.loaded = false;
        }
        
    }

})

export const { login, signup } = authSlice.actions

export default authSlice.reducer

