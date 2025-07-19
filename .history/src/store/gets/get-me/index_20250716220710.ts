import { authApi } from "@/hooks/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

// 1. Foydalanuvchi interfeyslari
export interface User {
  id: number;
  phone_number: string;
}

// 2. Volunteer profili
// Foydalanuvchi (common) interface
export interface User {
  id: number;
  phone_number: string;
}

// Umumiy profil: investor ham, volunteer ham
export interface UserProfile {
  id: number;
  user: User;

  // Volunteer uchun
  name?: string | null;
  surname?: string | null;
  date_of_birth?: string | null;
  gender?: "M" | "F" | null;
  profile_pic?: string | null;
  email?: string | null;
  passport_num?: string | null;

  // Investor uchun
  company_name?: string | null;
  inn?: string | null;
  company_owner?: string | null;
  company_email?: string | null;
  company_website?: string | null;

  // Umumiy
  address?: string | null;
}

// API javobi
export interface FetchUserResponse {
  role: "volunteer" | "investor";
  profile: UserProfile;
}

// Redux state
interface UserState {
  profile: UserProfile | null;
  role: "volunteer" | "investor" | null;
  loading: boolean;
  error: string | null;
}


// 5. Dastlabki holat
const initialState: UserState = {
  profile: null,
  role: null,
  loading: false,
  error: null,
};

// 6. Async thunk
export const fetchUser = createAsyncThunk<FetchUserResponse, void, { rejectValue: string }>(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await authApi.get("me/");
      return res.data;
    } catch (err) {
  const error = err as AxiosError<{ detail?: string }>;
  return rejectWithValue(error.response?.data?.detail || "Xatolik yuz berdi");
}
  }
);

// 7. Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.profile = null;
      state.role = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.profile;
        state.role = action.payload.role;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Ma'lumotni yuklashda xatolik";
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
