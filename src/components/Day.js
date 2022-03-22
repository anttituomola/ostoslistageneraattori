import React from 'react'
import DayName from './DayName'
import Portion from './Portion'

const Day = () => {
  return (
    <div className="day">
        <DayName />
        <Portion />
        <Portion />
    </div>
  )
}

export default Day