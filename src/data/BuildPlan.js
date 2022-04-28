import { addCurrentPlan } from "../reducers/recipeReducer"
import { clearCurrentPlan } from "../reducers/recipeReducer"

export function BuildPlan() {
    return async (dispatch, getState) => {
        const state = await getState()
        const days = state.metadata.days
        const portionsPerDay = state.metadata.portionsPerDay
        const recipes = state.recipes.recipes
        const portionsNeeded = portionsPerDay * days
        dispatch(clearCurrentPlan())

        // Create an array with length of portionsNeeded
        const currentPlan = []
        // pick random recipe
        while (portionsNeeded > currentPlan.length) {
            const recipe = recipes[Math.floor(Math.random() * recipes.length)]
            // add recipe to currentPlan
            currentPlan.push(recipe)
            if (recipe) {
                dispatch(addCurrentPlan(recipe))
            }
        }
        return currentPlan
    }

}
