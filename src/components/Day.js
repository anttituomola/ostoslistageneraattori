import { v4 as uuid } from "uuid"
import Portion from "./Portion"

const Day = (props) => {
    const portions = props.portions ? props.portions.map(portion => {
        return <Portion key={uuid()} portion={portion} />
    }) : ""
    
    if (props.portions) {
        return (
            <div id="dayContainer">
                <div className="day">
                    <h2>{props.weekday}</h2>
                    {portions}
                </div>
            </div>
        )
    } else return ""
}

export default Day
