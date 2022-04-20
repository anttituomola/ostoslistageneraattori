import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    recipes: [],
    recipeRows: []
}

export const recipeSlice = createSlice({
    name: "recipes",
    initialState: initialState,
    reducers: {
        recipeData: (state, action) => {
            state.recipes = action.payload
        },
        recipeRows: (state, action) => {
            state.recipeRows = action.payload
        }
    }
})

export const { recipeData, recipeRows } = recipeSlice.actions

export default recipeSlice.reducer