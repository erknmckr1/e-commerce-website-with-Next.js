import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name:"card",
    initialState:{
        products:[],
        quantity:0,
        total:0,
        subTotal:0,
        discount:0,
        discountAmount:0
    },
    reducers:{
        addProduct:(state,action) => {
            state.products.push(action.payload); // products dızısıne gelen butun datayı yolladık. 
            state.quantity += action.payload.quantity;
            state.subTotal += action.payload.price
            state.total += action.payload.discountPrice ? action.payload.discountPrice : action.payload.price;
            state.discount += action.payload.discount
            state.discountAmount += action.payload.discountAmount;
        },
        cancelProduct: (state,action) => {
            state.products = state.products.filter(product => product._id !== action.payload._id);
            state.quantity -= action.payload.quantity;
            state.subTotal -= action.payload.price;
            state.total -= action.payload.discountPrice ? action.payload.discountPrice : action.payload.price;
            state.discount -= action.payload.discount;
            state.discountAmount -= action.payload.discountAmount;
        },
        reset:(state)=>{
            state.products = [],
            state.quantity = 0,
            state.total = 0,
            state.subTotal = 0,
            state.discountAmount = 0,
            state.discount = 0
        }
    }
})

export const {addProduct,reset,cancelProduct} = cardSlice.actions;
export default cardSlice  
