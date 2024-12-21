import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
    baseURL: 'https://connections-api.goit.global/'
})

const setAuthHeader = (token) => {
    return api.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    return api.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk(
    'auth/register',
    async (cred, thunkAPI) => {
        try {
            const { data } = await api.post('/users/signup', cred)
            setAuthHeader(data.token)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (cred, thunkAPI) => {
        try {
            const { data } = await api.post('/users/login', cred)
            setAuthHeader(data.token)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await api.post('/users/logout')
            clearAuthHeader()
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const savedToken = thunkAPI.getState().auth.token
        if (!savedToken) return thunkAPI.rejectWithValue('Token does not exist')
        try {
            setAuthHeader(savedToken)
            const { data } = await api.get('/users/current')
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)