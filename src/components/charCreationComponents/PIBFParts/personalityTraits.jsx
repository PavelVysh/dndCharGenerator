import React, { useContext } from "react";
import { CharCreationContext } from "../../charCreation";

function PersonalityTraits() {

    const { stats, setStats, traits, setTraits } = useContext(CharCreationContext);


    function enter(event) {
        const value = event.target.value;
        if (event.key === "Enter") {
            setTraits((prev) => [...prev, value]);
            event.target.value = "";
        }
        if (value === "Fast") {
            setStats(prev => ({ ...prev, "dexterity": stats.dexterity + 2 }));
        }
    }

    function removeTrait(index) {
        if (traits[index] === "Fast") {
            setStats(prev => ({ ...prev, "dexterity": stats.dexterity - 2 }));
        }
        setTraits(prev => {
            return (prev.filter((item, i) => i !== index))
        });
    }

    return (<div className="personality-traits">
        <input onKeyDown={enter} name="trait" placeholder="Enter a trait"></input>
        {traits.map((trait, index) => {
            return <div key={index}>
                <p className="trait zero-margin inline" >{trait}</p>
                <button className="delete-button" onClick={() => removeTrait(index)}>-</button>
            </div>
        })}
        <p className="center zero-margin">Personality Traits</p>
    </div>
    )
}

export default PersonalityTraits;