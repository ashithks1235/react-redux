import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState: [],
    reducers:{
        //addto wishlist
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        //remove wishlist
        removeWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer