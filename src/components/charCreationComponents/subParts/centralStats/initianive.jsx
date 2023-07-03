import React, { useContext } from "react";
import { CharCreationContext } from "../../../charCreation";

function Initiative() {

    const {stats} = useContext(CharCreationContext)

    function countBonus(number) {
        return Math.max(Math.min(Math.floor((Number(number) / 2) - 5), 10), -5);
    }

    return (
        <div className="third">
            <input type="number" className="center" name="initiative" id="initiative" size="8" value={countBonus(stats.dexterity)} readOnly></input>
            <label htmlFor="initiative" >Initiative</label>
        </div>
    );
}

export default Initiative;