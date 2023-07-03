import React from "react";

function HitDice() {
    return (<div className="hit-dice">
        <div>
            <label htmlFor="total" id="total">Total</label>
            <input type="number" name="total" id="total" size="2"></input>
        </div>
        <div>
            <label htmlFor="hitDice">Hit dice</label>
            <input name="hitDice" id="hitDice" size="2"></input>
        </div>
    </div>);
}

export default HitDice;