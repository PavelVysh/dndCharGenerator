import React, { useState } from "react";

function Ideals() {

    const [ideals, setIdeals] = useState([]);

    function enter(event) {
        const value = event.target.value;
        if (event.key === "Enter") {
            setIdeals((prev) => [...prev, value]);
            event.target.value = "";
        }
    }

    function removeIdeal(index) {
        setIdeals(prev => {
            return prev.filter((_, i) => i !== index)
        }
        )
    }

    return <div className="ideals">
        <input onKeyDown={enter} nate="ideal" placeholder="Do you have any ideals?"></input>
        {ideals.map((ideal, index) => {
            return <div key={index}>
                <p className="ideal zero-margin inline">{ideal}</p>
                <button onClick={() => removeIdeal(index)}>Remove</button>
            </div>
        })}
        <p className="center zero-margin">Ideals</p>
    </div>
}

export default Ideals;