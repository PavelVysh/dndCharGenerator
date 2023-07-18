import React, { useContext} from "react";
import { CharCreationContext } from "../charCreation";

function Attacks() {

    const {weapons, setWeapons} = useContext(CharCreationContext);

    function enter(event) {
        if (event.key === "Enter") {
            const name = document.querySelector("#wName").value;
            const bonus = document.querySelector("#wBonus").value;
            const damage = document.querySelector("#wDamage").value;
            setWeapons(prev => [...prev, { name: name, bonus: bonus, damage: damage }])
            document.querySelector("#wName").value = "";
            document.querySelector("#wBonus").value = "";
            document.querySelector("#wDamage").value = "";
        }
    }

    function remove(index) {
        setWeapons(prev => prev.filter((_, i) => i !== index));
    }

    return <div className="attacks">
        <div className="weapon header">
            <p className="zero-margin flex-item font-size-14">Name</p>
            <p className="zero-margin flex-item-half font-size-14">ATK Bonus</p>
            <p className="zero-margin flex-item-half font-size-14">Damage/Type</p>
        </div>
        <div className="weapon input">
            <input size="5" className="flex-item" onKeyDown={enter} placeholder="name" name="name" id="wName"></input>
            <input size="3" className="flex-item-half" onKeyDown={enter} placeholder="atk bonus" name="atk-bonus" id="wBonus"></input>
            <input size="5" className="flex-item-half" onKeyDown={enter} placeholder="damage" name="damage" id="wDamage"></input>
        </div>
        {weapons.map((item, index) => {
            return (<div className="weapon" key={index}>
                <p className="flex-item zero-margin">{item.name}</p>
                <p className="flex-item-half zero-margin">{item.bonus}</p>
                <div className="flex-item-half">
                    <p className="zero-margin inline">{item.damage}</p>
                    <button onClick={() => remove(index)} className="float-right delete-button">-</button>
                </div>
            </div>)
        })}
        <p className="center zero-margin">Attacks & Spellcasting</p>
    </div>
}

export default Attacks;