import React from "react";

function DeathSaves() {
    return (<div className="hit-dice">
        <div className="full-width right-align">
            <p className="inline zero-margin">Successes</p>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
        </div>
        <div className="full-width right-align">
            <p className="inline zero-margin">Failures</p>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
        </div>
        <p className="inline zero-margin">Death Saves</p>
    </div>);
}

export default DeathSaves;