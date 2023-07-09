import React, { useContext } from "react";
import Money from "./money";
import { CharCreationContext } from "../../charCreation";

function Equipment() {

    const {equip, setEquip} = useContext(CharCreationContext);

    function enter(event) {
        if (event.key === "Enter") {
            const value = event.target.value;
            setEquip(prev => [...prev, value])
            event.target.value = "";
        }
    }

    function remove(index) {
        setEquip(prev => prev.filter((_, i) => i !== index));
    }

    return <div className="equipment">
        <div className="money float-left">
            <Money curr="CP" />
            <Money curr="SP" />
            <Money curr="GP" />
            <Money curr="PP" />
        </div>
        <div className="equipment-items">
            <input placeholder="equipment" onKeyDown={enter} name="equipment"></input>
            <p className="center zero-margin">Equipment</p>
            {equip.map((item, index) => {
                return <div key={index}>
                    <p className="zero-margin inline">{item}</p>
                    <button onClick={() => remove(index)}>Remove</button>
                </div>
            })}
        </div>
    </div>
}

export default Equipment;
