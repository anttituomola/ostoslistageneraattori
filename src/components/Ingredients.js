import { useSelector } from "react-redux"

export const Ingredients = () => {
  const recipes = useSelector(state => state.recipes.recipes)
  const recipeRowData = useSelector(state => state.recipes.recipeRows)
  const ingredientsData = useSelector(state => state.recipes.ingredients)
  let ingredients = <p>Loading...</p>

  if (recipes.length !== 0) {
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

    // Render ingredients name
    ingredients = matchingIngredients.map(recipeRow => {
      return <p key={recipeRow.id}>{recipeRow.fields.Name}, {recipeRow.fields.AmountPerPerson * 2} {recipeRow.fields.Unit}</p>
    })
  }

  return (
    <div>{ingredients}</div>
  )
}
