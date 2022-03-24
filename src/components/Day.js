import React from 'react'
import Portion from './Portion'
import dayjs from 'dayjs'

const Day = (props) => {
  return (
    <div className="day">
        <div>{props.day}</div>
        <Portion />
        <Portion />
    </div>
  )
}

export default Day