import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import { authApi } from "@/hooks/auth";
import type { UserProfile } from "./userSlice.types"; // optional: split interfaces
