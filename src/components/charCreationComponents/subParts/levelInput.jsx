import React, {useContext} from "react";
import { CharCreationContext } from "../../charCreation";

function LevelInput(props) {

    const {level, setLevel, setProficiency} = useContext(CharCreationContext);

    function changeLevel(event) {
        const value = event.target.value;
        setLevel(value);
        setProficiency(Math.ceil(value / 4) + 1);
    }
 
    return <div>
        <label htmlFor={props.labelFor}>{props.labelText}</label>
        {props.br}
        <input size={props.inputSize} type={props.inputType} name={props.inputName} id={props.inputId} value={level} onChange={changeLevel}></input>
    </div>
}

export default LevelInput;