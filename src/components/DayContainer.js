import React from 'react'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import useBuildPlan from '../data/buildPlan'

const DayContainer = () => {
  const recipes = useBuildPlan()
  const days = useSelector(state => state.metadata.days)
  const portionsPerDay = useSelector(state => state.metadata.portionsPerDay)
  const dayElements = [...Array(days)]
  const portionElements = [...Array(portionsPerDay)]
  const localRecipes = [...recipes]

  // Fill day elements with portion elements
  dayElements.map((day, index) => {
    dayElements[index] = portionElements
    return dayElements
  })

  // Fill portion elements with recipes
  const filledDays = dayElements.map((day, index) => {
    day = day.map((portion, index) => {
      day[index] = localRecipes.pop()
      return day[index]
    })
    return day
  })

  console.log(filledDays)


  return (
    <div id="dayContainer">
      {filledDays.map((day, index) => {
        return (
          <div key={index} className="day">
            <h2>{dayjs().add(index, "day").format("dddd")}</h2>
            {day.map((portion, index) => {
              console.log(portion, index)
              return (
                <div key={index} className="portion">
                  <h3>{portion}</h3>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
export default DayContainer
