import React from 'react'
import { useDispatch } from 'react-redux'
import { showModal, setModalRecipe } from '../reducers/modalReducer'

const Portion = (props) => {
    const dispatch = useDispatch()

    function handleModalGeneration() {
        dispatch(showModal())
        dispatch(setModalRecipe(props.recipe))
    }

    return (
        <div className="portion" onClick={() => handleModalGeneration()}>
            <h3>{props.recipe}</h3>
        </div>
    )
}

export default Portion