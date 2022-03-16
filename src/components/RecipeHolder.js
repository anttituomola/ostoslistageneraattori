import React from 'react'
import { Recipe } from "./Recipe"

export const RecipeHolder = () => {
    return <div id="recipeHolder">
        <Recipe recipe="Lasagne" />
        <Recipe recipe="Vietnamese Summer Rolls" />
        <Recipe recipe="Pasta Alfredo" />
        <Recipe recipe="Spanish omelet" />
        <Recipe recipe="Borscht soup" />
    </div>
}
