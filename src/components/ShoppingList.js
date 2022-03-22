import React, {useState} from 'react'

const ShoppingList = () => {
  const [triangleDown, turnTriangle] = useState(false)
  
  return (
    <div id="shoppingList">
      <div id="shoppingListHeader">
        <h2>Ingredients</h2>
        <span className={triangleDown ? "triangleDown material-icons" : "triangleUp material-icons"} onClick={() => turnTriangle(!triangleDown)}>eject</span>
      </div>
        <ul className={triangleDown ? "ingredientsVisible" : "ingredientsHidden"}>
          <li>Salt</li>
          <li>Pepper</li>
          <li>3 tomatoes</li>
          <li>2 cloves of garlic</li>
        </ul>
    </div>
  )
}

export default ShoppingList