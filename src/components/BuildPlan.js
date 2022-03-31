import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { planActions } from '../reducers/plans'
import dayjs from 'dayjs'

const BuildPlan = async () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    // How many portions do we need for the plan?
    const portions = state.metadata.portionsPerDay * state.metadata.days

    // Get recipes from the state
    const recipes = await state.recipes.recipes

    console.log(recipes)

    const recipeArray = []
    while (recipeArray.length < portions) {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]
        recipeArray.push(randomRecipe.fields.Name)
    }

    console.log(recipeArray)
}



export default BuildPlan