import React, {useState} from "react";
import CharCreationHeader from "./charCreationComponents/charCreationHeader";
import Main from "./charCreationComponents/charCreationMain";


function CharCreation() {

    const [stats, setStats] = useState({
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
    });

    const [race, setRace] = useState("");
    const [charClass, setCharClass] = useState("");

    return <div className="char-create container">
        <CharCreationHeader stats={stats} setStats={setStats} setRace={setRace} setClass={setCharClass}/>
        <Main race={race} stats={stats} charClass={charClass} setStats={setStats}/>
    </div>;
}

export default CharCreation;