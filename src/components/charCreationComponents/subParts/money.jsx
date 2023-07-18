import React from "react";

function Money(props) {
    return <div>
        <label className="float-left" htmlFor={props.curr}>{props.curr}</label>
        <input className="float-right" size={3} name={props.curr} id={props.curr}></input>
    </div>
}

export default Money;