
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    error: null
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.product = action.payload;
        },
        addProduct: (state, action) => {
            state.product.push(action.payload);
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setProducts, addProduct, setError } = productSlice.actions;
export default productSlice.reducer;