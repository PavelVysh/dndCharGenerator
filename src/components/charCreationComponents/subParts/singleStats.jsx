import React from "react";

function SingleStat(props) {

    const capitalizedLabel = props.stat.charAt(0).toUpperCase() + props.stat.slice(1);

    return <div className="inline">
    <input type="number" size="2" name={props.stat} id={props.stat}></input>
    <label htmlFor={props.stat}>{capitalizedLabel}</label>
    <br />
    </div>
}

export default SingleStat;