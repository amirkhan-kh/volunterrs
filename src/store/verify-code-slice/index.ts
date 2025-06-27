import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { noAuthApi } from '@/hooks/auth';
import type { AxiosError } from 'axios';

interface VerifyResponse {
  success: boolean;
  message: string;
}

interface VerifyState {
  loading: boolean;
  error: string | null;
  verified: boolean;
}

const initialState: VerifyState = {
  loading: false,
  error: null,
  verified: false,
};

export const verifyCode = createAsyncThunk<
  VerifyResponse,
  { phone_number: string; code: string },
  { rejectValue: string }
>(
  'verify/verifyCode',
  async ({ phone_number, code }, { rejectWithValue }) => {
    try {
      const res = await noAuthApi.post('verify/code/', {
        phone_number,
        code,
      });
      console.log(res.data, "code kelsin");
      return res.data as VerifyResponse;
      
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.loading = false;
        state.verified = true;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Xatolik yuz berdi';
      });
  },
});

export default verifySlice.reducer;
