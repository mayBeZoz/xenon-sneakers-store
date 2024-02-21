import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Stores/CartSlice"
import menuReducer from "../Stores/MenuSlice"
import shoesReducer from "../Stores/ShoesSlice"

const store = configureStore({
    reducer : {
        cart: cartReducer,
        showMenu: menuReducer,
        shoes: shoesReducer
    }
})

export default store