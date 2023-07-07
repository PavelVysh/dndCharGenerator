import React from "react";

function Money(props) {
    return <div>
        <label htmlFor="currency">{props.curr}</label>
        <input size={1} name={props.curr}></input>
    </div>
}

export default Money;