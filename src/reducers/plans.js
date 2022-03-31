import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    plans: [],
}

export const recipeSlice = createSlice({
    name: "plans",
    initialState: initialState,
    reducers: {
        createPlan: (state, action) => {
            state.plans = [
                ...state.plans,
                {
                    date: action.payload.date,
                    ordinalNumber: action.payload.ordinalNumber,
                    recipe: action.payload.recipe,
                }]
        }
    }
})

export const planActions = recipeSlice.actions
export default recipeSlice.reducer