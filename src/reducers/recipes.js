import { createSlice } from "@reduxjs/toolkit"
import Airtable from 'airtable'

const base = new Airtable({apiKey: 'keyMx6L7Z9LjE5XF8'}).base('appaCGplNqY1evEUb');
const recipes = base("Recipes")
const recipeRows = base("RecipeRows")

const getRecipes = async () => {
    const recipeArray = await recipes.select().firstPage()
    return recipeArray
}

const recipeArray = getRecipes().then(recipeArray => recipeArray)

const initialState = {
    recipes: recipeArray,
    recipeRows: [],
    ingredients: [],
    hardware: []
}

export const recipeSlice = createSlice({
    name: "recipes",
    initialState: initialState,
    reducers: {
        recipes: (state, action) => {
            state.recipes = action.payload
        },
        recipeRows: (state, action) => {
            state.recipeRows = action.payload
        },
        ingredients: (state, action) => {
            state.ingredients = action.payload
        },
        hardware: (state, action) => {
            state.hardware = action.payload
        }
    }
})

export default recipeSlice.reducer