import { v4 as uuid } from "uuid"
import Portion from "./Portion"

const Day = (props) => {
    console.log(props.portions)

    return (
        <div id="dayContainer">
            <div className="day">
                <h2>{props.weekday}</h2>
            </div>
        </div>
    )
}


export default Day
