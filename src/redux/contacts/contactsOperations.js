import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const result = await api.fetchContacts();
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkApi) => {
    try {
      const result = await api.addContact(contact);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkApi) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return thunkApi.rejectWithValue(error);
    }
  }
);
