import React from "react";

function Money(props) {
    return <div>
        <label htmlFor={props.curr}>{props.curr}</label>
        <input size={1} name={props.curr} id={props.curr}></input>
    </div>
}

export default Money;