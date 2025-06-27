import { authApi } from "@/hooks/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 1. Foydalanuvchi interfeyslari
export interface User {
  id: number;
  phone_number: string;
}

// 2. Volunteer profili
export interface VolunteerProfile {
  id: number;
  user: User;
  name: string;
  surname: string;
  date_of_birth: string;
  address: string;
  gender: "M" | "F";
  profile_pic: string | null;
  email: string | null;
  passport_num: string;
}

// 3. API javobi
export interface FetchUserResponse {
  role: "volunteer" | "investor";
  profile: VolunteerProfile;
}

// 4. Redux uchun state tipi
interface UserState {
  profile: VolunteerProfile | null;
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
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.detail || "Xatolik yuz berdi");
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
