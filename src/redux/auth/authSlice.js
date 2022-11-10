import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshing, signup } from './authOperation';

const initialState = {
  user: {},
  token: '',
  loading: false,
  isLogin: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
      state.loading = false;
    },
    [signup.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
      state.loading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logout.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: state => {
      state.user = {};
      state.token = '';
      state.isLogin = false;
      state.loading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [refreshing.pending]: state => {
      state.isRefreshing = true;
      state.error = null;
    },
    [refreshing.fulfilled]: (state, { payload }) => {
      state.user = { ...payload };
      state.isLogin = true;
      state.isRefreshing = false;
    },
    [refreshing.rejected]: (state, { payload }) => {
      state.isRefreshing = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
