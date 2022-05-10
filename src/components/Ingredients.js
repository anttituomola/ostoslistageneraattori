import { useSelector } from "react-redux"

export const Ingredients = () => {
  const currentPlan = useSelector(state => state.recipes.currentPlan)
  const recipes = useSelector(state => state.recipes.recipes)
  const recipeRowData = useSelector(state => state.recipes.recipeRows)
  const diners = useSelector(state => state.metadata.diners)
  let ingredients = <p>Loading...</p>

  // Get every ID in currentPlan
  const ids = currentPlan.map(recipe => recipe.id)

  // Get every recipe from recipes with the same ID as in currentPlan
  const recipesToDisplay = recipes.filter(recipe => ids.includes(recipe.id))

  // Get every recipeRow ID from recipesToDisplay
  const recipeRowIds = recipesToDisplay.map(recipe => recipe.fields.RecipeRows)

  // Flat the recipeRowIds array
  const flatRecipeRowIds = [].concat(...recipeRowIds)

  // Get every recipeRow from recipeRowData with the same ID as in flatRecipeRowIds
  const recipeRowsToDisplay = recipeRowData.filter(
    recipeRow => flatRecipeRowIds.includes(recipeRow.id)
  )

  // Display ingredients and amounts
  ingredients = recipeRowsToDisplay.map(recipeRow => {
    return <div key={recipeRow.id}>{recipeRow.fields.Name}, {recipeRow.fields.AmountPerPerson * diners} {recipeRow.fields.Unit}</div>
    })
  
  return (
    <div>{ingredients}</div>
  )
}
