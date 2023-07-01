import React, { useState } from "react";

function Stat(props) {

    const [inc, setInc] = useState("0");

    function getBonus(event) {
        setInc(Math.min(Math.floor((Number(event.target.value) / 2) - 5), 10));
    }

    return (<div className="main-stat container">
        <label htmlFor={props.stat}>{props.stat}</label>
        <input type="number" onChange={getBonus} name={props.stat} id={props.stat}></input>
        <p className="stat-bonus">{inc}</p>
    </div>)
}

export default Stat;