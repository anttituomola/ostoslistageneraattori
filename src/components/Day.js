import React, { useEffect, useState } from 'react'
import Portion from './Portion'
import { useSelector } from 'react-redux'
import Airtable from 'airtable'
import BuildPlan from './BuildPlan'

var base = new Airtable({ apiKey: 'keyMx6L7Z9LjE5XF8' }).base('appaCGplNqY1evEUb')

const Day = (props) => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function getData() {
      await base("Recipes")
        .select()
        .eachPage((records, fetchNextPage) => {
          setRecipes(records)
          fetchNextPage()
        })
    }
    getData()
  }, [])

  BuildPlan()

  const recipeArray = recipes.map(recipe => recipe.fields.Name)

  const wholeState = useSelector(state => state)
  const portions = [...Array(wholeState.metadata.portionsPerDay)].map((element, index) => {
    return <Portion key={index} name={recipeArray} />
  })

  return (
    <div className="day">
      <div>{props.day}</div>
      {portions}
    </div>
  )
}

export default Day