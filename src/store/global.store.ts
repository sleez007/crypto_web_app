import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GlobalState{
    isDarkTheme: boolean;
    isLoggedIn: boolean;
    email?: string,
    firstName?: string
}
const Theme_key = "theme_key";

const initialState: GlobalState = {
    isDarkTheme: localStorage.getItem(Theme_key) === 'true' ? true : false,
    isLoggedIn: false
}

export const globalSlice = createSlice({
    initialState,
    name: 'global',
    reducers: {
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
            localStorage.setItem(Theme_key, state.isDarkTheme.toString())
        },
        setUser: (state, {payload}: PayloadAction<{email: string, firstName: string}>) => {
            const {email, firstName} = payload;
            state.firstName = firstName;
            state.email = email;
            state.isLoggedIn = true;
        },
        logout:(state) =>{
            state.email = undefined;
            state.firstName = undefined;
            state.isLoggedIn = false;
        }
    },
})

export const { toggleTheme, setUser, logout} = globalSlice.actions;

export const selectTheme = (state: GlobalState) => state.isDarkTheme;

export const selectEmail = (state: GlobalState) => state?.email;

export default globalSlice.reducer;
