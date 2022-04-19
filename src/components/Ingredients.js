import { useSelector } from "react-redux"

export const Ingredients = () => {
    const recipes = useSelector(state => state.recipes.recipes)
    console.log(recipes)
    recipes.map(recipe => console.log(recipe.fields.Name))
    // I need to fetch all the data based on recipeRows. Should I do it initially or here?
  return (
    <div>Ingredients</div>
  )
}
