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

    console.log("char race: " + race);
    console.log("char class: " + charClass);

    return <div className="char-create container">
        <CharCreationHeader stats={stats} setStats={setStats} setRace={setRace} setClass={setCharClass}/>
        <Main stats={stats} setStats={setStats}/>
    </div>;
}

export default CharCreation;