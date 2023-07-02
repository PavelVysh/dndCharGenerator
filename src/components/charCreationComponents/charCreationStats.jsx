import React from "react";
import Stat from "./subParts/mainStat";
import SingleStat from "./subParts/singleStats";
import SavingThrow from "./subParts/savingThrow";
import Skill from "./subParts/skill";

function Stats() {
    return <div className="chars">
        <div className="main-stats container">
            <Stat stat="strength" />
            <Stat stat="dexterity"/>
            <Stat stat="constitution"/>
            <Stat stat="intelligence"/>
            <Stat stat="wisdom"/>
            <Stat stat="charisma"/>
        </div>
        <div className="right-part">
        <div className="single-stats container">
            <SingleStat stat="inspiration"/>
            <SingleStat stat="proficiency"/>
        </div>
        <div className="saving-throws container">
            <SavingThrow name="Strength" />
            <SavingThrow name="Dexterity" />
            <SavingThrow name="Constitution" />
            <SavingThrow name="Intelligence" />
            <SavingThrow name="Wisdom" />
            <SavingThrow name="Charisma" />
            <p className="text-center uppercase">Saving Throws</p>
        </div>
        <div className="skills container">
            <Skill name="Acrobatics" />
            <Skill name="Animal Handling" />
            <Skill name="Arcana" />
            <Skill name="Athletics" />
            <Skill name="Deception" />
            <Skill name="History" />
            <Skill name="Insight" />
            <Skill name="Intimidate" />
            <Skill name="Investigation" />
            <Skill name="Medicine" />
            <Skill name="Nature" />
            <Skill name="Perception" />
            <Skill name="Performance" />
            <Skill name="Persuasion" />
            <Skill name="Religion" />
            <Skill name="Sleight of Hand" />
            <Skill name="Stealth" />
            <Skill name="Survival" />
            <p className="text-center uppercase">Skills</p>
        </div>
        </div>
    </div>
}

export default Stats;