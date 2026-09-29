import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        // Filter out the deleted product by its _id
        removeProduct: (state, action) => {
            const idToDelete = action.payload;
            state.products = state.products.filter(
                (product) => product._id !== idToDelete
            );
        },
    }
})

export const { setLoading, setProducts,removeProduct } = productSlice.actions;
export default productSlice.reducer;