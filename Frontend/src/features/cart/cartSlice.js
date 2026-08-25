import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const existingItem = state.items.find(
                (item) => item.id == product.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...product,
                    quantity: 1,
                })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        increaseQuantity:(state,action)=>{
            const item = state.items.find(
                (item)=>item.id==action.payload,
            );
            if(item){
                item.quantity+=1;
            }
        },
        dicreaseQuantity:(state,action)=>{
            const item = state.items.find(
                (item)=>item.id==action.payload,
            );
            if(item){
                item.quantity-=1;
            }
            state.items =  state.items.filter(
                (item) => item.quantity>0,
            )
        },
        clearCart:(state,action)=>{
            state.items=[];
        }
    }
})

export const {addToCart,removeFromCart,increaseQuantity,dicreaseQuantity,clearCart} = cartSlice.actions;
export default cartSlice.reducer;