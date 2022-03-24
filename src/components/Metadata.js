import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as metaActions from "../reducers/metadata"

const Metadata = () => {
  const wholeState = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className='metadata'>
      <div className="metadataElement">
        Plan name
      </div>
      <div className="metadataElement right">
        <input id="menuNameInput" type="text" onChange={(event) => dispatch(metaActions.menuName(event.target.value))}/>
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
        <input type="text" onChange={(event) => dispatch(metaActions.addAllergy(event.target.value))}></input>
        <div>{wholeState.metadata.allergies}</div>
      </div>
    </div>
  )
}

export default Metadata
