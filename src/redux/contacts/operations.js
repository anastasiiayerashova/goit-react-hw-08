import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../auth/operations";



export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await api.get('/contacts')
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const { data } = await api.post('/contacts', newContact)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            await api.delete(`/contacts/${id}`)
            return id
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)