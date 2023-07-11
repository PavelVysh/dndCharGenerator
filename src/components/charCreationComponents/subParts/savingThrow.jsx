import React, { useContext } from "react";
import { CharCreationContext } from "../../charCreation";

function SavingThrow(props) {
    const { stStats, setStStats, proficiency } = useContext(CharCreationContext);

    function changeCheck() {
        setStStats(prev => ({ ...prev, [props.name]: !stStats[props.name] }))
    }

    const capitalizedLabel = props.name.charAt(0).toUpperCase() + props.name.slice(1);

    return <div>
        <input type="checkbox" onChange={changeCheck} checked={stStats[props.name]}></input>
        <input type="number" name={props.name} value={props.stat + (stStats[props.name] && proficiency)} readOnly></input>
        <label htmlFor={props.name}>{capitalizedLabel}</label>
    </div>
}

export default SavingThrow;