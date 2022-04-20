import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    recipes: [],
    recipeRows: [],
    ingredients: []
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
        },
        ingredients: (state, action) => {
            state.ingredients = action.payload
        }
    }
})

export const { recipeData, recipeRows, ingredients } = recipeSlice.actions

export default recipeSlice.reducer