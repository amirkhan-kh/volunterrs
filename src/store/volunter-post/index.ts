import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { noAuthApi } from '@/hooks/auth';
import type { AxiosError } from 'axios';

interface VolunteerRegisterData {
  phone_number: string;
  password: string;
  confirm_password: string;
  name: string;
  surname: string;
  date_of_birth: string;
  address: string;
  gender: string;
}

interface RegisterResponse {
  token?: string;
  success: boolean;
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

export const registerVolunteer = createAsyncThunk<
  RegisterResponse,
  VolunteerRegisterData,
  { rejectValue: string }
>(
  'auth/registerVolunteer',
  async (userData, { rejectWithValue }) => {
    try {
      const cleanedPhone = userData.phone_number.replace('+', '');
      const res = await noAuthApi.post('register/volunteer/', {
        ...userData,
        phone_number: cleanedPhone,
      });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
       if (res.data.id) {
        localStorage.setItem('userId', res.data.id.toString());
      }
      localStorage.setItem('role', 'volunteer');
      return res.data;
    } catch (err) {
      const error = err as AxiosError<any>;
        if (error.response?.status === 400) {
            return rejectWithValue(error.response.data.message || 'Ma\'lumotlar noto\'g\'ri');
        }
     console.log("Xatolik:", error.response?.data)
    }
  }
);

const volunteerRegisterSlice = createSlice({
  name: 'registerVolunteer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerVolunteer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerVolunteer.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerVolunteer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Xatolik';
      });
  },
});

export default volunteerRegisterSlice.reducer;
