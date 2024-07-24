import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {ApiContacts, ApiContact, Contact} from '../types';
import {RootState} from '../app/store';

export const createContact = createAsyncThunk<ApiContact, ApiContact, { state: RootState }>('contacts/add', async (contact) => {
    const {data: contacts} = await axiosApi.post<ApiContact>('/contacts.json', contact);
    return contacts;
  }
);

export const fetchContacts = createAsyncThunk<Contact[], void, {state: RootState}>('contacts/fetchContact', async () => {
    const {data: contacts} = await axiosApi.get<ApiContacts>('/contacts.json');
    if (contacts === null) {
      return [];
    }

    return Object.keys(contacts).map((id) => ({
      ...contacts[id],
      id,
    }));
  }
);

