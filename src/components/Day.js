import { useSelector } from 'react-redux'
import Portion from './Portion'
import { v4 as uuid } from "uuid"

const Day = (props) => {
    const recipes = useSelector(state => state.recipes.recipes)
    const portionsNeeded = useSelector(state => state.metadata.portionsPerDay)

    const portionsPerDay = Array.from({ length: portionsNeeded }, () => {
        // Pick a random recipe from recipes
        const recipe = recipes.length ? recipes[Math.floor(Math.random() * recipes.length)].fields.Name : "loading"
        return <Portion key={uuid()} recipe={recipe} />
    })

    return (
        <div id="dayContainer">
            <div className="day">
                <h2>{props.weekday}</h2>
                {portionsPerDay}
            </div>
        </div>
    )
}

export default Day
