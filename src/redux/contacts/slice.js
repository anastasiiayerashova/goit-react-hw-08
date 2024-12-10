import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import toast from 'react-hot-toast';

const initialState = {
    items: [],
    loading: false,
    error: null
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.items = action.payload
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.items.push(action.payload)
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.items = state.items.filter(item => item.id !== action.payload)
            })
            .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state) => {
                state.loading = true
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
                state.loading = false
                state.error = action.payload
                toast.error('Oops, something went wrong...')
        })
    }
})

export const contactsReducer = slice.reducer