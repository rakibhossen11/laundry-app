import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers:{
        addToCart:(state,action) =>{
            const itemPresent = state.cart.find ((item) => item.id === action.payload.id);
            
        }
    } 
});

export const {addToCart} = createSlice.action;

export default CartSlice.reducer;