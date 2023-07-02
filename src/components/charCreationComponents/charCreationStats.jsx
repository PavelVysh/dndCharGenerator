import React, { useState } from "react";
import Stat from "./subParts/mainStat";
import SingleStat from "./subParts/singleStats";
import SavingThrow from "./subParts/savingThrow";
import Skill from "./subParts/skill";

function Stats() {

    const [str, setStr] = useState(0);
    const [dex, setDex] = useState(0);
    const [con, setCon] = useState(0);
    const [int, setInt] = useState(0);
    const [wis, setWis] = useState(0);
    const [cha, setCha] = useState(0);

    return <div className="chars">
        <div className="main-stats container">
            <Stat stat="strength" val={str} setter={setStr} />
            <Stat stat="dexterity" val={dex} setter={setDex} />
            <Stat stat="constitution" val={con} setter={setCon} />
            <Stat stat="intelligence" val={int} setter={setInt} />
            <Stat stat="wisdom" val={wis} setter={setWis} />
            <Stat stat="charisma" val={cha} setter={setCha} />
        </div>
        <div className="right-part">
            <div className="single-stats container">
                <SingleStat stat="inspiration" />
                <SingleStat stat="proficiency" />
            </div>
            <div className="saving-throws container">
                <SavingThrow name="Strength" stat={str} />
                <SavingThrow name="Dexterity" stat={dex} />
                <SavingThrow name="Constitution" stat={con} />
                <SavingThrow name="Intelligence" stat={int} />
                <SavingThrow name="Wisdom" stat={wis} />
                <SavingThrow name="Charisma" stat={cha} />
                <p className="text-center uppercase">Saving Throws</p>
            </div>
            <div className="skills container">
                <Skill name="Acrobatics" stat={dex}/>
                <Skill name="Animal Handling" stat={wis}/>
                <Skill name="Arcana" stat={int}/>
                <Skill name="Athletics" stat={str}/>
                <Skill name="Deception" stat={cha}/>
                <Skill name="History" stat={int}/>
                <Skill name="Insight" stat={wis}/>
                <Skill name="Intimidate" stat={cha}/>
                <Skill name="Investigation" stat={int}/>
                <Skill name="Medicine" stat={wis}/>
                <Skill name="Nature" stat={int}/>
                <Skill name="Perception" stat={wis}/>
                <Skill name="Performance" stat={cha}/>
                <Skill name="Persuasion" stat={cha}/>
                <Skill name="Religion" stat={int}/>
                <Skill name="Sleight of Hand" stat={dex}/>
                <Skill name="Stealth" stat={dex}/>
                <Skill name="Survival" stat={wis}/>
                <p className="text-center uppercase">Skills</p>
            </div>
        </div>
    </div>
}

export default Stats;