import React from "react";

function GridItem(props) {
    return <div className="grid-item">
        <label htmlFor={props.labelFor}>{props.labelText}</label>
        <br />
        <input size={props.inputSize} type={props.inputType} name={props.inputName} id={props.inputId}></input>
    </div>
}

export default GridItem;