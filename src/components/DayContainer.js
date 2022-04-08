import React, { useState } from 'react'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import useBuildPlan from '../data/buildPlan'
import Modal from './Modal'

const DayContainer = () => {
  const [showModal, setModal] = useState(false)
  
    const closeModal = () => {
      setModal(false)
    }
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

      {/*  Loop through days */}
      {filledDays.map((day, index) => {
        return (
          <div key={index} className="day">
            <h2>{dayjs().add(index, "day").format("dddd")}</h2>

            {/*  Loop through portions within a day */}
            {day.map((portion, index) => {
              console.log(portion, index)
              return (
                <div key={index} className="portion" onClick={() => setModal(true)}>
                  <h3>{portion}</h3>
                </div>
              )
            })}
          </div>
        )
      })}
      <Modal showModal={showModal} closeModal={closeModal}/>
    </div>
  )
}
export default DayContainer
