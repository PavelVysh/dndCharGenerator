import React, { useContext } from "react";
import Stat from "./subParts/mainStat";
import SingleStat from "./subParts/singleStats";
import SavingThrow from "./subParts/savingThrow";
import Skill from "./subParts/skill";
import { CharCreationContext } from "../charCreation";

function Stats() {

    function countBonus(number) {
        return Math.max(Math.min(Math.floor((Number(number) / 2) - 5), 10), -5);
    }

    const {stats, setStats} = useContext(CharCreationContext);

    const strBonus = countBonus(stats.strength);
    const dexBonus = countBonus(stats.dexterity);
    const conBonus = countBonus(stats.constitution);
    const intBonus = countBonus(stats.intelligence);
    const wisBonus = countBonus(stats.wisdom);
    const chaBonus = countBonus(stats.charisma);


    return <div className="chars">
        <div className="main-stats container">
            <Stat stat="strength" val={stats.strength} setter={setStats} />
            <Stat stat="dexterity" val={stats.dexterity} setter={setStats} />
            <Stat stat="constitution" val={stats.constitution} setter={setStats} />
            <Stat stat="intelligence" val={stats.intelligence} setter={setStats} />
            <Stat stat="wisdom" val={stats.wisdom} setter={setStats} />
            <Stat stat="charisma" val={stats.charisma} setter={setStats} />
        </div>
        <div className="right-part">
            <div className="single-stats container">
                <SingleStat stat="inspiration" />
                <SingleStat stat="proficiency" />
            </div>
            <div className="saving-throws container">
                <SavingThrow name="strength" stat={strBonus} checkId='st-str'/>
                <SavingThrow name="dexterity" stat={dexBonus} checkId='st-dex'/>
                <SavingThrow name="constitution" stat={conBonus} checkId='st-con'/>
                <SavingThrow name="intelligence" stat={intBonus} checkId='st-int'/>
                <SavingThrow name="wisdom" stat={wisBonus} checkId='st-wis'/>
                <SavingThrow name="charisma" stat={chaBonus} checkId='st-cha'/>
                <p className="text-center uppercase">Saving Throws</p>
            </div>
            <div className="skills container">
                <Skill name="Acrobatics" id="acrobatics" stat={dexBonus}/>
                <Skill name="Animal Handling" id="animalHandling" stat={wisBonus}/>
                <Skill name="Arcana" id="arcana" stat={intBonus}/>
                <Skill name="Athletics" id="athletics" stat={strBonus}/>
                <Skill name="Deception" id="deception" stat={chaBonus}/>
                <Skill name="History" id="history" stat={intBonus}/>
                <Skill name="Insight" id="insight" stat={wisBonus}/>
                <Skill name="Intimidation" id="intimidation" stat={chaBonus}/>
                <Skill name="Investigation" id="investigation" stat={intBonus}/>
                <Skill name="Medicine" id="medicine" stat={wisBonus}/>
                <Skill name="Nature" id="nature" stat={intBonus}/>
                <Skill name="Perception" id="perception" stat={wisBonus}/>
                <Skill name="Performance" id="performance" stat={chaBonus}/>
                <Skill name="Persuasion" id="persuasion" stat={chaBonus}/>
                <Skill name="Religion" id="religion" stat={intBonus}/>
                <Skill name="Sleight of Hand" id="sleightOfHand" stat={dexBonus}/>
                <Skill name="Stealth" id="stealth" stat={dexBonus}/>
                <Skill name="Survival" id="survival" stat={wisBonus}/>
                <p className="text-center uppercase">Skills</p>
            </div>
        </div>
    </div>
}

export default Stats;