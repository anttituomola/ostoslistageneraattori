import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    recipes: [],
    recipeRows: [],
    ingredients: [],
    currentPlan: []
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
        },
        addCurrentPlan: (state, action) => {
            state.currentPlan.push(action.payload)
        },
        clearCurrentPlan: (state, action) => {
            state.currentPlan = []
        }
    }
})

export const { recipeData, recipeRows, ingredients, addCurrentPlan, clearCurrentPlan } = recipeSlice.actions

export default recipeSlice.reducer