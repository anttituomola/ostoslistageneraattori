import { addCurrentPlan } from "../reducers/recipeReducer"
import { useSelector, useDispatch } from 'react-redux'

export const useBuildPlan = () => {
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes.recipes)
    const days = useSelector(state => state.metadata.days)
    const portionsPerDay = useSelector(state => state.metadata.portionsPerDay)
    const portionsNeeded = portionsPerDay * days

    // Create an array with length of portionsNeeded
    const currentPlan = []
    // pick random recipe
    while (portionsNeeded > currentPlan.length) {
        const recipe = recipes[Math.floor(Math.random() * recipes.length)]
        // add recipe to currentPlan
        currentPlan.push(recipe)
        dispatch(addCurrentPlan(recipe))
    }
    return currentPlan
}
