import React, { useContext } from "react";
import { CharCreationContext } from "../../charCreation";

function Save() {

    const { equip, race, charClass, stats, stStats, skills } = useContext(CharCreationContext);

    function saveCharacter() {
        const requestBody = {
            name: document.getElementById('char-name').value,
            level: document.getElementById('char-level').value,
            charClass: charClass,
            race: race,
            alignment: document.getElementById('alignment').value,
            background: document.getElementById('background').value,
            equipment: equip,
            playerName: document.getElementById('player-name').value,
            experience: document.getElementById('experience').value,
            stats: stats,
            savingThrows: stStats,
            inspiration: document.getElementById('inspiration').value,
            proficiency: document.getElementById('proficiency').value,
            skills: skills
        }
        fetch(process.env.REACT_APP_API_URL + "/character", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }).then();
    }

    return <div>
        <button onClick={saveCharacter}>Save</button>
    </div>
}

export default Save;