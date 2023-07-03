import React from "react";

function CurrentHp() {
    return (<div className="central-row">
        <div>
            <label htmlFor="maxhp">Hit Point Maximum</label>
            <input name="maxhp" type="number" size="2"></input>
        </div>
        <div>
            <label className="zero-margin">Current hit points</label>
            <input name="currentHp" type="number" size="2"></input>
        </div>
    </div>);
}

export default CurrentHp;