import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, editContactName, editContactNumber, fetchContacts } from "./operations";
import toast from 'react-hot-toast';
import { logout } from "../auth/operations";

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
            .addCase(logout.fulfilled, (state) => {
                state.items = [],
                state.error = null
                state.loading = false
            })
            .addCase(editContactName.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index >= 0) {
                    state.items[index] = action.payload;  
                } 
                state.loading = false
            })
            .addCase(editContactNumber.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id)
                if (index >= 0) {
                    state.items[index] = action.payload
                }
                state.loading = false
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