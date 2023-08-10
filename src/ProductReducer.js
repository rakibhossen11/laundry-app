import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
        name: "product",
        initialState: {
            product: []
        },
        reducers: {
            getProducts:(state,action) =>{
                state.product.push({...action.payload})
            }
        }
});

export const {getProducts} = ProductSlice.actions;

export default ProductSlice.reducer;