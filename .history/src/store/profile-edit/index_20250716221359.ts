import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import { authApi } from "@/hooks/auth";
import type { UserProfile } from "../gets/get-me";


export const updateUser = createAsyncThunk<
  UserProfile, // response
  Partial<UserProfile>, // request body
  { rejectValue: string }
>(
  "user/updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.put("me/", data);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ detail?: string }>;
      return rejectWithValue(error.response?.data?.detail || "Profilni yangilashda xatolik");
    }
  }
);
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
