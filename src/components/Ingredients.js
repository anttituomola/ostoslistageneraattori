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

  ingredients = recipeRowsToDisplay.map(recipeRow => {
    return <div key={recipeRow.id}>{recipeRow.fields.Name}, {recipeRow.fields.AmountPerPerson * diners} {recipeRow.fields.Unit}</div>
    })
  
  return (
    <div>{ingredients}</div>
  )
}

    /*   if (recipes.length !== 0) {
        // Get every recipeRow id mentioned in the recipes
        const recipeRowsInRecipes = recipes.map(recipe => {
          return recipe.fields.RecipeRows
        })
    
        // Flatten the array of arrays
        const recipeRowsInRecipesFlat = recipeRowsInRecipes.flat()
    
        // Find matching id's in recipeRowData
        const matchingRecipeRows = recipeRowData.filter(recipeRow => {
          return recipeRowsInRecipesFlat.includes(recipeRow.id)
        })
    
        // Get ingredient IDs from matchingRecipeRows
        const ingredientIds = matchingRecipeRows.map(recipeRow => {
          return recipeRow.fields.Ingredient
        })
    
        // Flatten the array of arrays
        const ingredientIdsFlat = ingredientIds.flat()
    
        // Find matching ingredient IDs in ingredientData
        const matchingIngredients = ingredientsData.filter(ingredient => {
          return ingredientIdsFlat.includes(ingredient.id)
        })
        console.log(matchingIngredients)
    
        // Render ingredients name
        ingredients = matchingIngredients.map(recipeRow => {
          return <p key={recipeRow.id}>{recipeRow.fields.Name}, {recipeRow.fields.AmountPerPerson} {recipeRow.fields.Unit}</p>
        })
      } */