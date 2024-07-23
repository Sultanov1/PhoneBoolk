import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {Contact} from '../types';
import {RootState} from '../app/store';

export const createContact= createAsyncThunk<Contact, Contact, {state: RootState}>('contacts/add', async (contact) => {
  const {data: contacts} = await axiosApi.post<Contact>('contacts.json', contact);
  return contacts;
})
