import React from "react";
import Stat from "./subParts/mainStat";
import SingleStat from "./subParts/singleStats";
import SavingThrow from "./subParts/savingThrow";
import Skill from "./subParts/skill";

function Stats(props) {

    function countBonus(number) {
        return Math.max(Math.min(Math.floor((Number(number) / 2) - 5), 10), -5);
    }
    
    const stats = props.stats;

    const strBonus = countBonus(stats.strength);
    const dexBonus = countBonus(stats.dexterity);
    const conBonus = countBonus(stats.constitution);
    const intBonus = countBonus(stats.intelligence);
    const wisBonus = countBonus(stats.wisdom);
    const chaBonus = countBonus(stats.charisma);

    return <div className="chars">
        <div className="main-stats container">
            <Stat stat="strength" val={stats.strength} setter={props.setStats} />
            <Stat stat="dexterity" val={stats.dexterity} setter={props.setStats} />
            <Stat stat="constitution" val={stats.constitution} setter={props.setStats} />
            <Stat stat="intelligence" val={stats.intelligence} setter={props.setStats} />
            <Stat stat="wisdom" val={stats.wisdom} setter={props.setStats} />
            <Stat stat="charisma" val={stats.charisma} setter={props.setStats} />
        </div>
        <div className="right-part">
            <div className="single-stats container">
                <SingleStat stat="inspiration" />
                <SingleStat stat="proficiency" />
            </div>
            <div className="saving-throws container">
                <SavingThrow name="Strength" stat={strBonus} />
                <SavingThrow name="Dexterity" stat={dexBonus} />
                <SavingThrow name="Constitution" stat={conBonus} />
                <SavingThrow name="Intelligence" stat={intBonus} />
                <SavingThrow name="Wisdom" stat={wisBonus} />
                <SavingThrow name="Charisma" stat={chaBonus} />
                <p className="text-center uppercase">Saving Throws</p>
            </div>
            <div className="skills container">
                <Skill name="Acrobatics" stat={dexBonus}/>
                <Skill name="Animal Handling" stat={wisBonus}/>
                <Skill name="Arcana" stat={intBonus}/>
                <Skill name="Athletics" stat={strBonus}/>
                <Skill name="Deception" stat={chaBonus}/>
                <Skill name="History" stat={intBonus}/>
                <Skill name="Insight" stat={wisBonus}/>
                <Skill name="Intimidate" stat={chaBonus}/>
                <Skill name="Investigation" stat={intBonus}/>
                <Skill name="Medicine" stat={wisBonus}/>
                <Skill name="Nature" stat={intBonus}/>
                <Skill name="Perception" stat={wisBonus}/>
                <Skill name="Performance" stat={chaBonus}/>
                <Skill name="Persuasion" stat={chaBonus}/>
                <Skill name="Religion" stat={intBonus}/>
                <Skill name="Sleight of Hand" stat={dexBonus}/>
                <Skill name="Stealth" stat={dexBonus}/>
                <Skill name="Survival" stat={wisBonus}/>
                <p className="text-center uppercase">Skills</p>
            </div>
        </div>
    </div>
}

export default Stats;