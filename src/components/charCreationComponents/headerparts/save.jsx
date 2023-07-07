import React from "react";

function saveCharacter() {
    console.log("char saved");
}

function Save() {
    return <div>
        <button onClick={saveCharacter}>Save</button>
    </div>
}

export default Save;