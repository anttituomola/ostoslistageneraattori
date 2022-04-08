import React from 'react'
import recipes from '../data/fetchData'
import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from "uuid"
import { showModal } from '../reducers/modalReducer'

const Portion = () => {
    const dispatch = useDispatch()
    const id = uuid()

    // Pick a random recipe from recipes
    const recipe = recipes[Math.floor(Math.random() * recipes.length)]

    return (
        <div className="portion" onClick={() => dispatch(showModal())}>
            <h3>{recipe}</h3>
            <Modal portion={recipe} id={id} />
        </div>
    )
}

export default Portion