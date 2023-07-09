import React, {useContext} from "react";
import { CharCreationContext } from "../../charCreation";

function Save() {

    const {equip, race, charClass} = useContext(CharCreationContext);

    function saveCharacter() {
    
        const requestBody = {
            name: document.getElementById('char-name').value,
            level: document.getElementById('char-level').value,
            charClass: charClass,
            race: race,
            alignment: document.getElementById('alignment').value,
            background: document.getElementById('background').value,
            equipment: equip
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

    return <div>
        <button onClick={saveCharacter}>Save</button>
    </div>
}

export default Save;