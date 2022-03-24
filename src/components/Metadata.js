import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as metaActions from "../reducers/metadata"
import { allergies } from '../data/allergies'

const Metadata = () => {
  const wholeState = useSelector(state => state)
  const dispatch = useDispatch()

  const toggleClass = (id) => {
    if (wholeState.metadata.allergies.includes(id)) {
      return "allergy allergy-selected"
    } else {
      return "allergy"
    }
  }

  return (
    <div className='metadata'>
      <div className="metadataElement">
        Plan name
      </div>
      <div className="metadataElement right">
        <input id="menuNameInput" type="text" placeholder="Unhealthy madness" onChange={(event) => dispatch(metaActions.menuName(event.target.value))}/>
      </div>
      <div className="metadataElement">
        Number of diners
      </div>
      <div className="metadataElement right">
        <button className="metaMinus" onClick={() => dispatch(metaActions.decrementDiners())}>-</button>
        <span className="metaNumber">{wholeState.metadata.diners}</span>
        <button onClick={(event) => dispatch(metaActions.incrementDiners(event.target.value))}>+</button>
      </div>
      <div className="metadataElement">
        Number of days
      </div>
      <div className="metadataElement right">
        <button className="metaMinus" onClick={() => dispatch(metaActions.decrementDays())}>-</button>
        <span className="metaNumber">{wholeState.metadata.days}</span>
        <button onClick={() => dispatch(metaActions.incrementDays())}>+</button>
      </div>
      <div className="metadataElement">
        Portions per day
      </div>
      <div className="metadataElement right">
        <button className="metaMinus" onClick={() => dispatch(metaActions.decrementPortions())}>-</button>
        <span className="metaNumber">{wholeState.metadata.portionsPerDay}</span>
        <button onClick={() => dispatch(metaActions.incrementPortions())}>+</button>
      </div>
      <div className="metadataElement">
        Allergies
      </div>
      <div className="metadataElement right">
        {allergies.map((allergy, index) => <span id={allergy} key={allergy+index} className={toggleClass(allergy)} onClick={() => {
          dispatch(metaActions.addAllergy(allergy))
          }}>{allergy}</span>)}
      </div>
    </div>
  )
}

export default Metadata
