import React from "react";

function SingleStat(props) {
    return <div className="inline">
    <input type="number" size="2" name={props.stat} id={props.stat}></input>
    <label htmlFor={props.stat}>{props.stat}</label>
    <br />
    </div>
}

export default SingleStat;