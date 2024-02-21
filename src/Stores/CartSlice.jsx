import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
}

const CartSlice = createSlice({
    
    name : "cart",
    
    initialState,
    
    reducers : {
        
        addProduct : ( state , action ) => {
            state.data = [ ...state.data , { ...action.payload , quantity:1 } ]
        },
        
        removeProduct : ( state , action ) => {
            state.data = state.data.filter( product => product.id !== action.payload.id )
        },

        incProductQty : ( state , action ) => {
            state.data = state.data.map(product => {
                if ( product.id === action.payload.id )
                return { ...product , quantity: product.quantity + 1 }
                return product
            })

        },
        
        decProductQty : ( state , action ) => {
            state.data = state.data.map(product => {
                if ( product.id === action.payload.id ){
                    if ( product.quantity !== 1 )
                    return { ...product , quantity: product.quantity - 1 }
                }
                return product
            })
        },

        removeAllProducts : (state) => {
            state.data = []
        }
    }
    
})


export const { addProduct , removeProduct , removeAllProducts , incProductQty , decProductQty } = CartSlice.actions
export default CartSlice.reducer;
