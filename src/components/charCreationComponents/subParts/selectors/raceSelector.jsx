import React, { useState, useContext, useEffect } from "react";
import races from "../../data/races";
import {removeStat, addStat} from "../../../helperFunctions";
import { CharCreationContext } from "../../../charCreation";


function RaceSelector() {

    const [prevRace, setPrevRace] = useState("");
    const {setRace, stats, setStats, race} = useContext(CharCreationContext);

    const props = {stats, setStats};

    useEffect(() => {
        setPrevRace(prev => prev = race);
    }, [race])

    function addStats(event) {
        const value = event.target.value;
        removeStat(props, prevRace);
        addStat(props, value);
        setRace(value);
    }

    return <div className="grid-item">
        <label htmlFor="race">Race</label>
        <br />
        <select size={1} onChange={addStats} type="text" name="race" id="race" value={race}>
            {races().map((race) => (
                <option value={race} key={race}>{race}</option>
            ))}
        </select>
    </div>
}

export default RaceSelector;