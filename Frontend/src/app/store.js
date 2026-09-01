import {configureStore } from "@reduxjs/toolkit"
import cartReducer from "../features/cart/cartSlice.js"
import productsReducer from '../features/products/state/productSlice.js'

export const store = configureStore({
    
    reducer:{
        cart:cartReducer,
        products:productsReducer,
    }
})