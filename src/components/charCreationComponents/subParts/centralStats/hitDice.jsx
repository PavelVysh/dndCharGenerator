import React from "react";

function HitDice(props) {

    function getHitDice() {
        switch(props.charClass) {
            case "Wizard":
            case "Sorcerer": return "d6";
            case "Warlock":
            case "Cleric": 
            case "Bark": 
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
            <input type="number" name="total" id="total" size="2"></input>
        </div>
        <div>
            <p className="center" name="hitDice" id="hitDice" size="2">{getHitDice()}</p>
            <p className="center" htmlFor="hitDice">Hit dice</p>
        </div>
    </div>);
}

export default HitDice;