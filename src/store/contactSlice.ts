import {createSlice} from '@reduxjs/toolkit';
import {Contact} from '../types';
import {createContact, fetchContacts} from './contactThunk';

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
      .addCase(createContact.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createContact.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(fetchContacts.fulfilled, (state , action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      });
  },
  selectors:  {
    selectNewContacts: (state) => state.contacts,
    isSelectLoading: (state) => state.isLoading,
  }
});

export const {
  selectNewContacts, isSelectLoading
} = contactSlice.selectors;

export const contactReducer = contactSlice.reducer;