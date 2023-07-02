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
                <SavingThrow name="Strength" stat={countBonus(stats.strength)} />
                <SavingThrow name="Dexterity" stat={countBonus(stats.dexterity)} />
                <SavingThrow name="Constitution" stat={countBonus(stats.constitution)} />
                <SavingThrow name="Intelligence" stat={countBonus(stats.intelligence)} />
                <SavingThrow name="Wisdom" stat={countBonus(stats.wisdom)} />
                <SavingThrow name="Charisma" stat={countBonus(stats.charisma)} />
                <p className="text-center uppercase">Saving Throws</p>
            </div>
            <div className="skills container">
                <Skill name="Acrobatics" stat={countBonus(stats.dexterity)}/>
                <Skill name="Animal Handling" stat={countBonus(stats.wisdom)}/>
                <Skill name="Arcana" stat={countBonus(stats.intelligence)}/>
                <Skill name="Athletics" stat={countBonus(stats.strength)}/>
                <Skill name="Deception" stat={countBonus(stats.charisma)}/>
                <Skill name="History" stat={countBonus(stats.intelligence)}/>
                <Skill name="Insight" stat={countBonus(stats.wisdom)}/>
                <Skill name="Intimidate" stat={countBonus(stats.charisma)}/>
                <Skill name="Investigation" stat={countBonus(stats.intelligence)}/>
                <Skill name="Medicine" stat={countBonus(stats.wisdom)}/>
                <Skill name="Nature" stat={countBonus(stats.intelligence)}/>
                <Skill name="Perception" stat={countBonus(stats.wisdom)}/>
                <Skill name="Performance" stat={countBonus(stats.charisma)}/>
                <Skill name="Persuasion" stat={countBonus(stats.charisma)}/>
                <Skill name="Religion" stat={countBonus(stats.intelligence)}/>
                <Skill name="Sleight of Hand" stat={countBonus(stats.dexterity)}/>
                <Skill name="Stealth" stat={countBonus(stats.dexterity)}/>
                <Skill name="Survival" stat={countBonus(stats.wisdom)}/>
                <p className="text-center uppercase">Skills</p>
            </div>
        </div>
    </div>
}

export default Stats;