import React from "react";
import classes from "../../data/classes";



function ClassSelector(props) {

    function setClass(event) {
        props.setClass(event.target.value);
    }

    return <div className="grid-item">
    <label htmlFor="class">Class</label>
    <br />
    <select size={1} onChange={setClass} type="text" name="class" id="class">
        {classes().map((oneClass) => (
            <option value={oneClass} key={oneClass}>{oneClass}</option>
        ))}
    </select>
</div>
}

export default ClassSelector;