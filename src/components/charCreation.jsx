import React, { useState, createContext } from "react";
import CharCreationHeader from "./charCreationComponents/charCreationHeader";
import CharCreationMain from "./charCreationComponents/charCreationMain";
import Header from "./header";

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

    return <div>
        <CharCreationContext.Provider value={contextValue}>
            <div>
                <Header />
            </div>
            <div className="char-create container">
                <CharCreationHeader />
                <CharCreationMain />
            </div>
        </CharCreationContext.Provider>
    </div>;
}

export default CharCreation;