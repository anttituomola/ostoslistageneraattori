import { useSelector } from "react-redux"
import recipes from "./fetchData"

const useBuildPlan = () => {
    const metadata = useSelector(state => state.metadata)
    const portionsInPlan = metadata.days * metadata.portionsPerDay
    const recipesArray = [...recipes]
    
    // Pick a random recipe from the recipes array
    
    // Create an array of recipes to be used in the plan
    const plan = []
    for (let i = 0; i < portionsInPlan; i++) {
        if (recipesArray.length === 0) {
            // Get random recipe
            const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]
            plan.push(randomRecipe)
        } else {
            const randomRecipe = recipesArray.splice([Math.floor(Math.random() * recipesArray.length)], 1)[0]
            plan.push(randomRecipe)
        }
    }
    return plan
}

export default useBuildPlan