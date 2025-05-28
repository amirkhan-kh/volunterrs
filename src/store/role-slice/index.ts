import type { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from "@reduxjs/toolkit";

interface IRoleState {
  role: "volunterr" | "investor" | null;
}

const initialState: IRoleState = {
    role: null
} 

const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {
        setRole: (state, action: PayloadAction<"volunterr" | "investor">) => {
        state.role = action.payload;
    },
    }
})
export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;