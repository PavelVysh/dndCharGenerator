import React, { useState } from "react";

function Skill(props) {

    const [check, setCheck] = useState(false);
    const [val, setVal] = useState(0);

    function changeCheck() {
        setCheck(!check)
    }

    function changeVal(event) {
        if (event.target.value > Number(props.stat) + (check && 3) + Number(val)) {
            setVal(prev => prev + 1);
        } else {
            setVal(prev => prev - 1);
        }
    }

    return <div>
        <input type="checkbox" onClick={changeCheck}></input>
        <input type="number" name={props.name} id={props.name} value={Number(props.stat) + (check && 3) + Number(val)} onChange={changeVal}></input>
        <label htmlFor={props.name}>{props.name}</label>
    </div>
}

export default Skill;