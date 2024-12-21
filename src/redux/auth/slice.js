import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";
import { isAnyOf } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: null,
        email: null
    },
    error: false,
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
                state.error = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true
                state.token = action.payload.token
                state.user = action.payload.user
                state.error = false
            })
            .addCase(logout.fulfilled, () => initialState)
            .addCase(refreshUser.pending, (state) => {
               state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isRefreshing = false
                state.isLoggedIn = true
                state.user = action.payload
                state.error = false
            })
            .addCase(refreshUser.rejected, (state) => {
                state.loading = false
                state.isRefreshing = false
                state.error = false
            })
            .addMatcher(isAnyOf(register.pending, login.pending, logout.pending, refreshUser.pending), (state) => {
                state.error = false
                state.loading = true
            })
            .addMatcher(isAnyOf(register.rejected, login.rejected, logout.rejected), (state, action) => {
                state.loading = false
                state.error = action.payload
        })
    }
})

export const authReducer = slice.reducer