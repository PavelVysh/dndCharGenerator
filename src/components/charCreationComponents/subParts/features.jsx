import React, { useState } from "react";

function Features() {

    const [features, setFeatures] = useState([]);

    function enter(event) {
        if (event.key === "Enter") {
            const value = event.target.value;
            setFeatures((prev) => [...prev, value]);
            event.target.value = "";
        }
    }

    function remove(index) {
        setFeatures((prev) => prev.filter((_, i) => i !== index));
    }

    return <div className="features-traits">
        <input name="feature-traits" onKeyDown={enter} placeholder="feature"></input>
        {features.map((feature, index) => {
            return (
                <div key={index}>
                    <p className="zero-margin inline">{feature}</p>
                    <button onClick={() => remove(index)}>Remove</button>
                </div>
            )
        })}
        <p className="center zero-margin">Features & Traits</p>
    </div>

}

export default Features;