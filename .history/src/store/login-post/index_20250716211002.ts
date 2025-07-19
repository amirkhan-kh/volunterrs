import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { noAuthApi } from '@/hooks/auth';
import type { AxiosError } from 'axios';
import type { ErrorResponse } from 'react-router';

interface LoginData {
  phone_number: string;
  password: string;
}

interface LoginResponse {
  access: string;
  refresh: string;
  id: number; 
}

interface LoginState {
  loading: boolean;
  error: string | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: LoginState = {
  loading: false,
  error: null,
  token: null,
  isAuthenticated: false,
};

export const loginVolunteer = createAsyncThunk<
  LoginResponse,
  LoginData,
  { rejectValue: string }
>(
  'auth/loginVolunteer',
  async (credentials, { rejectWithValue }) => {
    try {
      const cleanedPhone = credentials.phone_number.replace('+', '');
      const res = await noAuthApi.post('login/', {
        phone_number: cleanedPhone,
        password: credentials.password,
      });

      console.log("Loginga so'rov yuborildi:", cleanedPhone);

      localStorage.setItem('token', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);

      if ('id' in res.data) {
        localStorage.setItem('userId', res.data.id.toString());
      }

      localStorage.setItem('role', 'volunteer');

      return {
        access: res.data.access,
        refresh: res.data.refresh,
        id: res.data.id,
      };
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;

      console.error("Login error:", error.response?.data || error.message);

      if (error.response?.status === 401 || error.response?.status === 400) {
        return rejectWithValue("Telefon raqam yoki parol noto‘g‘ri");
      }

      return rejectWithValue("Serverda xatolik yuz berdi");
    }
  }
);

const loginSlice = createSlice({
  name: 'loginVolunteer',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
      localStorage.removeItem('userId');
      localStorage.removeItem('role');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginVolunteer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginVolunteer.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access;
        state.isAuthenticated = true;
      })
      .addCase(loginVolunteer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Xatolik';
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
