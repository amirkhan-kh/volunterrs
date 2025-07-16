import { authApi } from "@/hooks/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Interface: Volunteer user model
export interface VolunteerUser {
  id: number;
  phone_number: string;
}

export interface VolunteerProfile {
  id: number;
  user: VolunteerUser;
  name: string;
  surname: string;
  date_of_birth: string;
  address: string;
  gender: "M" | "F";
  profile_pic: string | null;
  email: string | null;
  passport_num: string;
}

// Async thunk: Barcha volontyorlarni olish
export const fetchAllVolunteers = createAsyncThunk<
  VolunteerProfile[],
  void,
  { rejectValue: string }
>(
  "volunteer/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authApi.get("volunteer/");
      return response.data as VolunteerProfile[];
    } catch (err: any) {
      const message =
        err.response?.data?.detail || "Volontyorlarni olishda xatolik yuz berdi.";
      return rejectWithValue(message);
    }
  }
);

interface VolunteerState {
  data: VolunteerProfile[];
  loading: boolean;
  error: string | null;
}

const initialState: VolunteerState = {
  data: [],
  loading: false,
  error: null,
};

const volunteerSlice = createSlice({
  name: "volunteers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllVolunteers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllVolunteers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllVolunteers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Xatolik yuz berdi.";
      });
  },
});

export default volunteerSlice.reducer;
