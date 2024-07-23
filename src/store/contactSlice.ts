import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '../types';
import {createContact} from './contactThunk';

export interface ContactsState {
  contacts: Contact[];
  isLoading: boolean;
  error: boolean;
}

const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: false,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createContact.fulfilled, (state, action: PayloadAction<Contact>) => {
        state.isLoading = false;
        state.contacts.push(action.payload)
      })
      .addCase(createContact.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  }
});


export const contactReducer = contactSlice.reducer;