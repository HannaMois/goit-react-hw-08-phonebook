import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(login.pending, state => {
        state.isLoading = true;
      })

      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(logout.pending, state => {
        state.isLoading = true;
      })

      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })

      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
      })

      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = payload;
        state.isLoggedIn = true;
      })

      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = payload;
      }),
});

export default authSlice.reducer;
