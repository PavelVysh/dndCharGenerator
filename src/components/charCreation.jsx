import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadChar from "./charCreationComponents/loadChar/loadChar";
import Header from "./header";
import CharCreationContainer from "./charCreationConteiner";

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
    const [equip, setEquip] = useState([]);
    const [stStats, setStStats] = useState({
        strength: false,
        dexterity: false,
        constitution: false,
        intelligence: false,
        wisdom: false,
        charisma: false
    });

    const [level, setLevel] = useState(0);
    const [proficiency, setProficiency] = useState(0);

    const [languages, setLanguages] = useState([]);

    const [skills, setSkills] = useState({
        acrobatics: { toggle: false, value: 0 },
        animalHandling: { toggle: false, value: 0 },
        arcana: { toggle: false, value: 0 },
        athletics: { toggle: false, value: 0 },
        deception: { toggle: false, value: 0 },
        history: { toggle: false, value: 0 },
        insight: { toggle: false, value: 0 },
        intimidation: { toggle: false, value: 0 },
        investigation: { toggle: false, value: 0 },
        medicine: { toggle: false, value: 0 },
        nature: { toggle: false, value: 0 },
        perception: { toggle: false, value: 0 },
        performance: { toggle: false, value: 0 },
        persuasion: { toggle: false, value: 0 },
        religion: { toggle: false, value: 0 },
        sleightOfHand: { toggle: false, value: 0 },
        stealth: { toggle: false, value: 0 },
        survival: { toggle: false, value: 0 }
    });

    const [weapons, setWeapons] = useState([])

    const contextValue = {
        stats, setStats,
        race, setRace,
        charClass, setCharClass,
        equip, setEquip,
        stStats, setStStats,
        skills, setSkills,
        level, setLevel,
        proficiency, setProficiency,
        languages, setLanguages,
        weapons, setWeapons
    };

    return (
        <Router>
            <CharCreationContext.Provider value={contextValue}>
                <Header />
                <Routes>
                    <Route path="/" element={<CharCreationContainer />} />
                    <Route exact path="/load" element={<LoadChar />} />
                </Routes>
            </CharCreationContext.Provider>
        </Router>
    );
}

export default CharCreation;