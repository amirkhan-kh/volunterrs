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

// --- Redux State ---
interface UserState {
  profilePut: UserProfile | null;
  rolePut: "volunteer" | "investor" | null;
  loadingPut: boolean;
  errorPut: string | null;
}

const initialState: UserState = {
  profilePut: null,
  rolePut: null,
  loadingPut: false,
  errorPut: null,
};

export const updateUser = createAsyncThunk<
  UserProfile,
  Partial<UserProfile>,
  { rejectValue: string }
>("user/updateUser", async (formData, { rejectWithValue }) => {
  try {
    const response = await authApi.put("me/", formData); // <-- data yuborilmoqda
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ detail?: string }>;
    return rejectWithValue(
      error.response?.data?.detail || "Profilni yangilashda xatolik"
    );
  }
});


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.profilePut = null;
      state.rolePut = null;
      state.loadingPut = false;
      state.errorPut = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loadingPut = true;
        state.errorPut = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loadingPut = false;
        state.profilePut = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loadingPut = false;
        state.errorPut = action.payload || "Profil yangilanmadi";
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
