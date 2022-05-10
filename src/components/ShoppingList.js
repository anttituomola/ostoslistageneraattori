import React, {useState} from 'react'
import { Ingredients } from './Ingredients'

const ShoppingList = () => {
  const [triangleDown, turnTriangle] = useState(false)
  
  return (
    <div id="shoppingList">
      <div id="shoppingListHeader">
        <h2>Ingredients</h2>
        <span className={triangleDown ? "triangleDown material-icons" : "triangleUp material-icons"} onClick={() => turnTriangle(!triangleDown)}>eject</span>
      </div>
        <ul className={triangleDown ? "ingredientsVisible" : "ingredientsHidden"}>
          <Ingredients />
        </ul>
    </div>
  )
}

export default ShoppingList