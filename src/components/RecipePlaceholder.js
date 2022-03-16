import React, { useState } from 'react'

export const RecipePlaceholder = () => {
    let value = ""
    const [recipe, setRecipe] = useState("Gimme food")
    const [isOnSelectMode, selectMode] = useState(false)
    const handleToggle = () => {
        selectMode(isOnSelectMode => !isOnSelectMode)
    }
    if (isOnSelectMode === true) {
        value = <select style={{textAlign: "center"}} >
                <option>Lasagne</option>
                <option>Pasta</option>
                <option>Soup</option>
            </select>
    } else {
        value = <p style={{textAlign: "center"}} onClick={handleToggle}>{recipe}</p>

    }
    return <div>
            {value}
        </div>
}
