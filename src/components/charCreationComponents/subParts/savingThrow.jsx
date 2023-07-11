import React, { useContext } from "react";
import { CharCreationContext } from "../../charCreation";

function SavingThrow(props) {
    const { stStats, setStStats } = useContext(CharCreationContext);

    function changeCheck() {
        setStStats(prev => ({ ...prev, [props.name]: !stStats[props.name] }))
    }

    return <div>
        <input type="checkbox" onChange={changeCheck} checked={stStats[props.name]}></input>
        <input type="number" name={props.name} value={props.stat + (stStats[props.name] && 2)} readOnly></input>
        <label htmlFor={props.name}>{props.name}</label>
    </div>
}

export default SavingThrow;