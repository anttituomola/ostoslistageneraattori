import React from 'react'
import { useDispatch } from 'react-redux'
import { showModal, setModalRecipe } from '../reducers/modalReducer'

const Portion = (props) => {
    const dispatch = useDispatch()

    function handleModalGeneration() {
        dispatch(showModal())
        dispatch(setModalRecipe(props.portion.fields.Name))
        console.log(props)
    }

    return (
        <div className="portion" onClick={() => handleModalGeneration()}>
            <h3>{props.portion.fields.Name}</h3>
        </div>
    )
}

export default Portion