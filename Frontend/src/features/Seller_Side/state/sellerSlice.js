import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
}

const sellerSlice = createSlice({
    name: "deleteProduct",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const { setLoading } = sellerSlice.actions;
export default sellerSlice.reducer;