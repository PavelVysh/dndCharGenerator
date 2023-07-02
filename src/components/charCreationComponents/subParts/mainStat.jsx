import React from "react";

function Stat(props) {


    function getBonus(event) {
        props.setter(Math.max(Math.min(Math.floor((Number(event.target.value) / 2) - 5), 10), -5));
    }

    return (<div className="main-stat container">
        <label htmlFor={props.stat}>{props.stat}</label>
        <input type="number" onChange={getBonus} name={props.stat} id={props.stat}></input>
        <p className="stat-bonus">{props.val > 0 && "+"}{props.val}</p>
    </div>)
}

export default Stat;