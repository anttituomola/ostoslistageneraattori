import React from 'react'
import Day from './Day'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

const DayContainer = () => {
  const wholeState = useSelector(state => state)
  const days = [...Array(wholeState.metadata.days)].map((element, index) => {
    return <Day day={dayjs().add(index, "day").format("dddd, DD.MM")} key={index}/>
  })

  return (
    <div id="dayContainer">
      {days}
    </div>
  )
}

export default DayContainer
