import React, { useContext } from "react";
import { CharCreationContext } from "../../../charCreation";

function HitDice() {

    const {charClass} = useContext(CharCreationContext);

    function getHitDice() {
        switch(charClass) {
            case "Wizard":
            case "Sorcerer": return "d6";
            case "Warlock":
            case "Cleric": 
            case "Bard": 
            case "Rogue": 
            case "Druid": 
            case "Monk": return "d8";
            case "Fighter": 
            case "Paladin": 
            case "Ranger": return "d10";
            case "Barbarian": return "d12";
            default: return "";
        }
    }

    return (<div className="hit-dice">
        <div>
            <label htmlFor="total">Total</label>
            <input type="number" name="total" id="totalHitDice" size="2"></input>
        </div>
        <div>
            <p className="center" name="hitDice" id="hitDice" size="2">{getHitDice()}</p>
            <p className="center" htmlFor="hitDice">Hit dice</p>
        </div>
    </div>);
}

export default HitDice;