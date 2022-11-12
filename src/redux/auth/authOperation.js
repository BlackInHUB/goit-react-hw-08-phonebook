import { createAsyncThunk } from '@reduxjs/toolkit';
import { notifyError, notifyWarningAuth } from 'utils/notify';
import * as api from '../../services/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (signupData, thunkApi) => {
    try {
      const result = await api.signup(signupData);
      return result;
    } catch ({ response }) {
      notifyError();
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (loginData, thunkApi) => {
    try {
      const result = await api.login(loginData);
      return result;
    } catch ({ response }) {
      notifyError();
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await api.logout();
  } catch ({ response }) {
    const error = {
      status: response.status,
      message: response.data.message,
    };
    return thunkApi.rejectWithValue(error);
  }
});

export const refreshing = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const { getState } = thunkApi;
    const { auth } = getState();

    try {
      const result = await api.refreshing(auth.token);
      return result;
    } catch ({ response }) {
      notifyWarningAuth();
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return thunkApi.rejectWithValue(error);
    }
  }
);
