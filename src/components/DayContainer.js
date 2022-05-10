import dayjs from 'dayjs'
import { useSelector, useDispatch } from 'react-redux'
import Day from './Day'
import { v4 as uuid } from "uuid"
import Modal from './Modal'
import { BuildPlan } from '../data/BuildPlan'
import { useEffect } from 'react'

const DayContainer = () => {
  const dispatch = useDispatch()
  const portionsPerDay = useSelector(state => state.metadata.portionsPerDay)
  const daysNeeded = useSelector(state => state.metadata.days)
  const currentPlan = useSelector(state => state.recipes.currentPlan)

  // Run BuildPlan on mount
  useEffect(() => {
    dispatch(BuildPlan())
  }, [daysNeeded, portionsPerDay, dispatch])

  // Divide portions into days
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    )
     
  const chunks = chunk(currentPlan, portionsPerDay)

  const days = Array.from({ length: daysNeeded }, (x, i) => {
    return <Day key={uuid()} portions={chunks[i]} weekday={dayjs().add(i, "day").format("dddd")} />
  })

  return (
    <div id="dayContainer">
      {days}
      <Modal />
    </div>
  )
}
export default DayContainer
