import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    recipes: []
}

export const recipeSlice = createSlice({
    name: "recipes",
    initialState: initialState,
    reducers: {
        recipeData: (state, action) => {
            state.recipes = action.payload
        },
    }
})

export const { recipeData } = recipeSlice.actions

export default recipeSlice.reducer