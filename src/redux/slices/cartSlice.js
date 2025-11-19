import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        // add to cart
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                //increment quantity
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProduct,existingProduct]
            }else{
                //insert product
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        //remove cart
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        incrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item=>item.id!=action.payload)
            state = [...remainingProduct,existingProduct]
        },
        decrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item=>item.id!=action.payload)
            state = [...remainingProduct,existingProduct]
        },
        // empty
        emptyCart: ()=>{
            return []
        }
    }
})

export const {addToCart,removeCartItem,incrementCartItem,decrementCartItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer