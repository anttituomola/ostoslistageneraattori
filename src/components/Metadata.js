import React from 'react'
import { useDispatch } from 'react-redux'
import { updateMetadata } from "../reducers/metadata"

const Metadata = () => {
  const dispatch = useDispatch()

  return (
    <div className='metadata'>
      <div className="metadataElement">
        Plan name
      </div>
      <div className="metadataElement right">
        <input id="menuNameInput" type="text" onChange={(event) => dispatch(updateMetadata({ menuName: event.target.value }))} />
      </div>
      <div className="metadataElement">
        Number of diners
      </div>
      <div className="metadataElement right">
        <button className="metaMinus">-</button><span className="metaNumber">2</span><button>+</button>
      </div>
      <div className="metadataElement">
        Number of days
      </div>
      <div className="metadataElement right">
        <button className="metaMinus">-</button><span className="metaNumber">2</span><button>+</button>
      </div>
      <div className="metadataElement">
        Portions per day
      </div>
      <div className="metadataElement right">
        <button className="metaMinus">-</button><span className="metaNumber">2</span><button>+</button>
      </div>
      <div className="metadataElement">
        Allergies
      </div>
      <div className="metadataElement right">
        <span>Nuts</span><span>Kiwi</span>
      </div>
    </div>
  )
}

export default Metadata
