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
                <SavingThrow name="strength" stat={strBonus} checkId='st-str' isCheck={false}/>
                <SavingThrow name="dexterity" stat={dexBonus} checkId='st-dex' isCheck={false}/>
                <SavingThrow name="constitution" stat={conBonus} checkId='st-con' isCheck={false}/>
                <SavingThrow name="intelligence" stat={intBonus} checkId='st-int' isCheck={false}/>
                <SavingThrow name="wisdom" stat={wisBonus} checkId='st-wis' isCheck={false}/>
                <SavingThrow name="charisma" stat={chaBonus} checkId='st-cha' isCheck={false}/>
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