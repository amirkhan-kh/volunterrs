import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError }  from "axios";

export interface Order {
  id: number;
  customer_name: string;
  address: string;
  total_cost: number;
  payment_method: "click" | "payme"; 
  is_paid: boolean;
}

export interface CreateOrderResponse {
  order: Order;
  payment_link: string;
}

export interface CreateOrderRequest {
  customer_name: string;
  address: string;
  total_cost: number;
  payment_method: "click" | "payme"; 
}


interface OrderState {
  order: CreateOrderResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  order: null,
  loading: false,
  error: null,
};

export const createOrder = createAsyncThunk<
  CreateOrderResponse,
  CreateOrderRequest,
  { rejectValue: string }
>("order/createOrder", async (orderData, { rejectWithValue }) => {
  try {
    const res = await axios.post("https://volunteers.uz:8443/payment/v2/order/create/", orderData);
    return res.data;
  } catch (err) {
     const error = err as AxiosError<{ detail?: string }>;
    return rejectWithValue(
      error.response?.data?.detail || "Buyurtma yaratishda xatolik"
    );
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrder(state) {
      state.order = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Xatolik yuz berdi";
      });
  },
});

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
