const Day = (props) => {
    let portions = ""
    console.log(props.portions)
    if (props.portions[0]) {
        portions = props.portions.map(portion => {
            return <h3>{portion.fields.Name}</h3>
        })
    }

    return (
        <div id="dayContainer">
            <div className="day">
                <h2>{props.weekday}</h2>
                {props.portions[0] ? portions : "loading"}
            </div>
        </div>
    )
}

export default Day
