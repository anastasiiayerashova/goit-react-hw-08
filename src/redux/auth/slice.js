import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const initialState = {
    user: {
        name: null,
        email: null
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true
                state.token = action.payload.token
                state.user = action.payload.user
            })
            .addCase(logout.fulfilled, () => initialState)
            
            .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isRefreshing = false
                state.isLoggedIn = true
                state.user = action.payload
            })
            .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false
        })
    }
})

export const authReducer = slice.reducer