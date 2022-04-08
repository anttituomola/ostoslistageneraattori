import React from 'react'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import Day from './Day'
import { v4 as uuid } from "uuid"
import Modal from './Modal'

const DayContainer = () => {
  const daysNeeded = useSelector(state => state.metadata.days)

  const days = Array.from({ length: daysNeeded }, (x, i) => {
    return <Day key={uuid()} weekday={dayjs().add(i, "day").format("dddd")} />
  })

  return (
    <div id="dayContainer">
      {days}
      <Modal />
    </div>
  )
}
export default DayContainer
