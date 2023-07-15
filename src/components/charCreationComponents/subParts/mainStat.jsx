import React from "react";

function Stat(props) {

    const capitalizedLabel = props.stat.charAt(0).toUpperCase() + props.stat.slice(1);

    function countBonus(number) {
        return Math.max(Math.min(Math.floor((Number(number) / 2) - 5), 10), -5);
    }

    function getBonus(event) {
        const value = event.target.value;
        props.setter(prev => ({...prev ,[props.stat]: value}));
    }
    return (<div className="main-stat container">
        <label htmlFor={props.stat}>{capitalizedLabel}</label>
        <input type="number" className="hide-arrows" onChange={getBonus} name={props.stat} id={props.stat} value={props.val}></input>
        <p className="stat-bonus">{countBonus(props.val) > 0 && "+"}{countBonus(props.val)}</p>
    </div>)
}

export default Stat;