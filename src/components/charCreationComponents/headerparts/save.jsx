import React, { useContext } from "react";
import { CharCreationContext } from "../../charCreation";

function Save() {

    const { equip, race, charClass, stats, stStats, skills, languages, weapons, traits, ideals, flaws, bonds, features } = useContext(CharCreationContext);

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
            skills: skills,
            passiveWisdom: document.getElementById('passive-wisdom').value,
            languages: languages,
            armorClass: document.getElementById('armorClass').value,
            maxHp: document.getElementById('maxHp').value,
            currentHp: document.getElementById('currentHp').value,
            tempHp: document.getElementById('tempHp').value,
            totalHitDice: document.getElementById('totalHitDice').value,
            deathSaveSuccesses: {
                t1: document.getElementById('d1').checked,
                t2: document.getElementById('d2').checked,
                t3: document.getElementById('d3').checked
            },
            deathSaveFailures: {
                t1: document.getElementById('s1').checked,
                t2: document.getElementById('s2').checked,
                t3: document.getElementById('s3').checked
            },
            weapons: weapons,
            copper: document.getElementById('CP').value,
            silver: document.getElementById('SP').value,
            gold: document.getElementById('GP').value,
            platinum: document.getElementById('PP').value,
            traits: traits,
            ideals: ideals,
            flaws: flaws,
            bonds: bonds,
            features: features
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
        <button className="save-button" onClick={saveCharacter}>Save</button>
    </div>
}

export default Save;