import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const MenuSlice = createSlice({
    name : "menu",
    initialState,
    reducers: {
        changeShowMenuStatus: (state) => {
            return !state
        },

    }
})


export const { changeShowMenuStatus } = MenuSlice.actions

export default MenuSlice.reducer