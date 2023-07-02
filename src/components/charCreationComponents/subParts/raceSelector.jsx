import React, { useState } from "react";
import races from "../data/races";
import {removeStat, addStat} from "../../helperFunctions";


function RaceSelector(props) {

    const [prevRace, setPrevRace] = useState("");

    function addStats(event) {
        const value = event.target.value;
        removeStat(props, prevRace);
        setPrevRace(value);
        addStat(props, value);
        props.setRace(value);
    }

    return <div className="grid-item">
        <label htmlFor={props.labelFor}>{props.labelText}</label>
        {props.br}
        <select size={1} onChange={addStats} type={props.inputType} name={props.inputName} id={props.inputId}>
            {races().map((race) => (
                <option value={race} key={race}>{race}</option>
            ))}
        </select>
    </div>
}

export default RaceSelector;