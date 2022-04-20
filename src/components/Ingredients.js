import { useSelector } from "react-redux"

export const Ingredients = () => {
  const recipes = useSelector(state => state.recipes.recipes)
  const recipeRowData = useSelector(state => state.recipes.recipeRows)
  let ingredients = <p>Loading...</p>

  console.log(recipes)
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
    console.log(matchingRecipeRows)

    // Get ingredient IDs from matchingRecipeRows
    const ingredientIds = matchingRecipeRows.map(recipeRow => {
      return recipeRow.fields.Ingredient
    })
    console.log(ingredientIds)

    // Render ingredients name
    ingredients = matchingRecipeRows.map(recipeRow => {
      return <p key={recipeRow.id}>{recipeRow.fields.Name}, {recipeRow.fields.AmountPerPerson * 2} {recipeRow.fields.Unit}</p>
    })
  }

  return (
    <div>{ingredients}</div>
  )
}
