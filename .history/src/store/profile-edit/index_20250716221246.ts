import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import { authApi } from "@/hooks/auth";
import type { UserProfile } from "./userSlice.types"; // optional: split interfaces


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
