import React, { useState } from "react";

function Skill(props) {

    const [check, setCheck] = useState(true);
    const [val, setVal] = useState(0);

    function changeCheck() {
        check ? setCheck(false) : setCheck(true);
        check ? setVal(Number(val) + 3) : setVal(Number(val) - 3);
    }

    function changeVal(event) {
        setVal(event.target.value);
    }

    return <div>
        <input type="checkbox" onClick={changeCheck}></input>
        <input type="number" name={props.name} id={props.name} value={Number(val) + props.stat} onChange={changeVal}></input>
        <label htmlFor={props.name}>{props.name}</label>
    </div>
}

export default Skill;