import React, { useContext, useEffect, useState } from "react";
import { CharCreationContext } from "../../charCreation";

function PassiveWisdom() {

    const [value, setValue] = useState(0);
    const { skills, stats, proficiency } = useContext(CharCreationContext);

    useEffect(() => {
        setValue(10 + skills.perception.value + (skills.perception.toggle && proficiency) + Math.max(Math.min(Math.floor((Number(stats.wisdom) / 2) - 5), 10), -5));
    }, [skills, stats, proficiency]);

    return <div className="passive-wisdom container">
        <input type="number" name="passive-wisdom" id="passive-wisdom" size="2" value={value} readOnly></input>
        <label htmlFor="passive-wisdom">Passive Wisdom (Perception)</label>
    </div>
}

export default PassiveWisdom;