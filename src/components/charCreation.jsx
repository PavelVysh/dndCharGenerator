import React, { useState, createContext } from "react";
import CharCreationHeader from "./charCreationComponents/charCreationHeader";
import CharCreationMain from "./charCreationComponents/charCreationMain";

export const CharCreationContext = createContext();

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

    const contextValue = {
        stats,
        setStats,
        race,
        setRace,
        charClass,
        setCharClass
    };

    return <div className="char-create container">
        <CharCreationContext.Provider value={contextValue}>
            <CharCreationHeader />
            <CharCreationMain />
        </CharCreationContext.Provider>
    </div>;
}

export default CharCreation;