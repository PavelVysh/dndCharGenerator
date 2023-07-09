import React, { useState, createContext} from "react";
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

    const contextValue = {
        stats,
        setStats,
        race,
        setRace,
        charClass,
        setCharClass
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