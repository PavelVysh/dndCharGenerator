import React, { useContext } from "react";
import { CharCreationContext } from "../../charCreation";

function Proficiency(props) {

    const {proficiency, setProficiency} = useContext(CharCreationContext);

    const capitalizedLabel = props.stat.charAt(0).toUpperCase() + props.stat.slice(1);

    function changeProficiency(event) {
        setProficiency(event.target.value);
    }

    return <div className="inline">
    <input type="number" size="2" name={props.stat} id={props.stat} value={proficiency} onChange={changeProficiency}></input>
    <label htmlFor={props.stat}>{capitalizedLabel}</label>
    <br />
    </div>
}

export default Proficiency;