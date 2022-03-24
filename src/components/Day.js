import React from 'react'
import Portion from './Portion'
import { useSelector } from 'react-redux'


const Day = (props) => {
  const wholeState = useSelector(state => state)
  const portions = [...Array(wholeState.metadata.portionsPerDay)].map((element, index) => {
    return <Portion key={index}/>
  })

  return (
    <div className="day">
        <div>{props.day}</div>
        {portions}
    </div>
  )
}

export default Day