import React from "react";

function LabelInput(props) {
    return <div>
        <label htmlFor={props.labelFor}>{props.labelText}</label>
        {props.br}
        <input size={props.inputSize} type={props.inputType} name={props.inputName} id={props.inputId} value={props.value}></input>
    </div>
}

export default LabelInput;