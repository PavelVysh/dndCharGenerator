import React from "react";

function saveCharacter() {

    const requestBody = {
        name: document.getElementById('char-name').value,
        level: document.getElementById('char-level').value,
        charClass: document.getElementById('class').value,
        race: document.getElementById('race').value,
        alignment: document.getElementById('alignment').value,
        background: document.getElementById('background').value
        //todo playerName and experience
    }

    fetch(process.env.REACT_APP_API_URL + "/character", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    }).then();
}

function Save() {
    return <div>
        <button onClick={saveCharacter}>Save</button>
    </div>
}

export default Save;