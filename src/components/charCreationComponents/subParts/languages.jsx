import React, { useState } from "react";
import PassiveWisdom from "./passiveWisdom";

function Languages() {

    const [proficiencies, setProficiencies] = useState([]);

    function enter(event) {
        const value = event.target.value;
        if (event.key === "Enter") {
            setProficiencies(prev => [...prev, value]);
            event.target.value = "";
        }
    }

    function removeProficiencie(index) {
        setProficiencies(prev => {
            return prev.filter((_, i) => i !== index);
        })
    }

    return <div className="languages">
        <PassiveWisdom />
        <div className="proficiencies">
            <input onKeyDown={enter} name="proficiencies" placeholder="enter stuff here"></input>
            {proficiencies.map((prof, index) => {
                return <div key={index}>
                    <p className="prof zero-margin inline">{prof}</p>
                    <button onClick={() => removeProficiencie(index)}>Remove</button>
                </div>
            })}
            <p className="center zero-margin">Other Proficiencies & Languages</p>
        </div>
    </div>
}

export default Languages;