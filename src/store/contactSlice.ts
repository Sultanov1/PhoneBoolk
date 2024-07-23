import {createSlice} from '@reduxjs/toolkit';
import {Contact} from '../types';

export interface ContactsState {
  contacts: Contact[];
  isLoading: boolean;
  error: boolean;
}

const initialState = {
  contact: [],
  isLoading: false,
  error: false,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
});