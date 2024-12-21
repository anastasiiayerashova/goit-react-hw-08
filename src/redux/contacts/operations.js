import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";
import { setAuthHeader } from "../auth/operations";

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

export const editContactName = createAsyncThunk(
    'contacts/editContactName',
     async (body, thunkAPI) => {
        try {
            const savedToken = thunkAPI.getState().auth.token
            if (!savedToken) return thunkAPI.rejectWithValue('Token does not exist')
            const { data } = await api.patch(`/contacts/${body.contactId}`, {
                name: body.name,   
                number: body.number
            });
            setAuthHeader(savedToken)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const editContactNumber = createAsyncThunk(
    'contacts/editContactNumber',
     async (body, thunkAPI) => {
        const savedToken = thunkAPI.getState().auth.token
        if (!savedToken) return thunkAPI.rejectWithValue('Token does not exist')
        try {
            const { data } = await api.patch(`contacts/${body.contactId}`, {
                name: body.name,
                number: body.number
            })
            setAuthHeader(savedToken)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)