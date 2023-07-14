import React from "react";

function DeathSaves() {
    return (<div className="hit-dice">
        <div className="full-width right-align">
            <p className="inline zero-margin">Successes</p>
            <input type="checkbox" id="d1"></input>
            <input type="checkbox" id="d2"></input>
            <input type="checkbox" id="d3"></input>
        </div>
        <div className="full-width right-align">
            <p className="inline zero-margin">Failures</p>
            <input type="checkbox" id="s1"></input>
            <input type="checkbox" id="s2"></input>
            <input type="checkbox" id="s3"></input>
        </div>
        <p className="inline zero-margin">Death Saves</p>
    </div>);
}

export default DeathSaves;