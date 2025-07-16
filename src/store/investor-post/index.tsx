import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { noAuthApi } from '@/hooks/auth';
import type { AxiosError } from 'axios';

interface InvestorRegisterData {
  phone_number: string;
  password: string;
  confirm_password: string;
  company_name: string;
  inn: string;
  address: string;
}

interface RegisterResponse {
  token?: string;
  id?: number;
  success?: boolean;
  message?: string;
}

interface RegisterState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: RegisterState = {
  loading: false,
  error: null,
  success: false,
};

export const registerInvestor = createAsyncThunk<
  RegisterResponse,
  InvestorRegisterData,
  { rejectValue: string }
>(
  'auth/registerInvestor',
  async (investorData, { rejectWithValue }) => {
    try {
      const cleanedPhone = investorData.phone_number.replace('+', '');
      const res = await noAuthApi.post('register/investor/', {
        ...investorData,
        phone_number: cleanedPhone,
      });

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
      if (res.data.id) {
        localStorage.setItem('userId', res.data.id.toString());
      }
      localStorage.setItem('role', 'investor');

      return res.data;
    } catch (err) {
      const error = err as AxiosError<any>;
      if (error.response?.status === 400) {
        const detail =
          typeof error.response.data === 'object'
            ? Object.values(error.response.data).flat().join(', ')
            : 'Maʼlumotlar notoʻgʻri';
        return rejectWithValue(detail);
      }
      return rejectWithValue('Serverda xatolik yuz berdi');
    }
  }
);

const investorRegisterSlice = createSlice({
  name: 'registerInvestor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerInvestor.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerInvestor.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerInvestor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Xatolik';
      });
  },
});

export default investorRegisterSlice.reducer;
