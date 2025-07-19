import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import { authApi } from "@/hooks/auth";

// --- User va Profile interfacelari ---
export interface User {
  id: number;
  phone_number: string;
}

export interface UserProfile {
  id: number;
  user: User;

  // Volunteer
  name?: string | null;
  surname?: string | null;
  date_of_birth?: string | null;
  gender?: "M" | "F" | null;
  profile_pic?: string | null;
  email?: string | null;
  passport_num?: string | null;

  // Investor
  company_name?: string | null;
  inn?: string | null;
  company_owner?: string | null;
  company_email?: string | null;
  company_website?: string | null;

  // Common
  address?: string | null;
  facebook?: string | null;
  telegram?: string | null;
  instagram?: string | null;
}

export interface FetchUserResponse {
  role: "volunteer" | "investor";
  profile: UserProfile;
}

interface UserState {
  profile: UserProfile | null;
  role: "volunteer" | "investor" | null;
  loading: boolean;
  error: string | null;
}

// --- Initial state ---
const initialState: UserState = {
  profile: null,
  role: null,
  loading: false,
  error: null,
};

// --- Thunk: fetchUser ---
export const fetchUser = createAsyncThunk<
  FetchUserResponse,
  void,
  { rejectValue: string }
>("user/fetchUser", async (_, { rejectWithValue }) => {
  try {
    const res = await authApi.get("me/");
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ detail?: string }>;
    return rejectWithValue(error.response?.data?.detail || "Xatolik yuz berdi");
  }
});

// --- Thunk: updateUser ---
export const updateUser = createAsyncThunk<
  UserProfile,
  Partial<UserProfile>,
  { rejectValue: string }
>("user/updateUser", async (data, { rejectWithValue }) => {
  try {
    const response = await authApi.put("me/", data);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ detail?: string }>;
    return rejectWithValue(error.response?.data?.detail || "Profilni yangilashda xatolik");
  }
});

// --- Slice ---
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
      // fetchUser
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
      })

      // updateUser
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Profil yangilanmadi";
      });
  },
});

// --- Export ---
export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
