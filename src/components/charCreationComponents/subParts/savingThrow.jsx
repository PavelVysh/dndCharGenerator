import React, { useState } from "react";

function SavingThrow(props) {

    const [check, setCheck] = useState(true);
    const [val, setVal] = useState(0);

    function changeCheck() {
        check ? setCheck(false) : setCheck(true);
        check ? setVal(Number(val) + 2) : setVal(Number(val) - 2);
    }

    function changeVal(event) {
        setVal(event.target.value);
    }

    return <div>
        <input type="checkbox" onClick={changeCheck}></input>
        <input type="number" name={props.name} id={props.name} value={Number(val) + props.stat} onChange={changeVal} readOnly></input>
        <label htmlFor={props.name}>{props.name}</label>
    </div>
}

export default SavingThrow;