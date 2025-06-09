import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  noAuthApi } from '@/hooks/auth';
import type { AxiosError } from 'axios';

interface SendCodeResponse {
  success: boolean;
  message: string;
  code?: string;
}

interface LoginState {
  loading: boolean;
  error: string | null;
  data: SendCodeResponse | null;
}

const initialState: LoginState = {
  loading: false,
  error: null,
  data: null,
};

export const sendCode = createAsyncThunk<
  SendCodeResponse,
  string,
  { rejectValue: string }
>(
  'login/sendCode',
  async (phone_number, { rejectWithValue }) => {
    try {
      const res = await noAuthApi.post('send/code/', { phone_number });
      return res.data as SendCodeResponse;
      console.log(res.data);
      
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      console.error("Kod yuborishda xatolik:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendCode.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(sendCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Noma’lum xatolik';
      });
  },
});

export default loginSlice.reducer;
