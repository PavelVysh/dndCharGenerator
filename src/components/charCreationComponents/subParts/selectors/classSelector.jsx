import React, { useContext } from "react";
import classes from "../../data/classes";
import {CharCreationContext} from "../../../charCreation";

function ClassSelector() {

    const {setCharClass, charClass} = useContext(CharCreationContext);

    function setClass(event) {
        setCharClass(event.target.value);
    }

    return <div className="grid-item">
    <label htmlFor="class">Class</label>
    <br />
    <select size={1} onChange={setClass} type="text" name="class" id="class" value={charClass}>
        {classes().map((oneClass) => (
            <option value={oneClass} key={oneClass}>{oneClass}</option>
        ))}
    </select>
</div>
}

export default ClassSelector;