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









/*     const recipes = useBuildPlan()
    const days = useSelector(state => state.metadata.days)
    const dayElements = [...Array(days)]
    const portionsPerDay = useSelector(state => state.metadata.portionsPerDay)
    const portionElements = [...Array(portionsPerDay)]
    const localRecipes = [...recipes]


    // Fill day elements with portion elements
    dayElements.map((day, index) => {
        dayElements[index] = portionElements
        return dayElements
    })

    // Fill portion elements with recipes
    const filledDays = dayElements.map((day, index) => {
        day = day.map((portion, index) => {
            day[index] = localRecipes.pop()
            return day[index]
        })
        return day
    }) */