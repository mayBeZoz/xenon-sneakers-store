import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading:true,
    isError:false,
    data:[]
}

const ShoesSlice = createSlice({
    name : "shoes",
    reducers:{},
    initialState,
    extraReducers:(build) => {
        build.addCase(fetchShoes.fulfilled, (state,action) => {
            state.isLoading = false 
            state.data = [...action.payload]
        })
        .addCase(fetchShoes.rejected , (state) => {
            state.isError = true
            state.isLoading = true
        })
        .addCase(fetchShoes.pending , (state) => {
            state.isLoading = true
        })
    }
})





export const fetchShoes = createAsyncThunk("fetchShoes",async () => {

    const url = "https://api.npoint.io/10aea263260ef40221bf"

    try {
        const res = await fetch(url)

        if (res.ok === false)
        return []

        const data = await res.json()
        return data
    }
    catch (error) {
        return []
    }
})


export default ShoesSlice.reducer