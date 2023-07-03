import React from "react";
import ArmorClass from "./charCreationComponents/subParts/centralStats/armor";
import Initiative from "./charCreationComponents/subParts/centralStats/initianive";
import Speed from "./charCreationComponents/subParts/centralStats/speed";
import CurrentHp from "./charCreationComponents/subParts/centralStats/currentHp";
import TempHp from "./charCreationComponents/subParts/centralStats/tempHp";
import HitDice from "./charCreationComponents/subParts/centralStats/hitDice";
import DeathSaves from "./charCreationComponents/subParts/centralStats/deathSaves";

function CentralStats(props) {
    return (<div className="central-stats container">
        <div className="central-top-row">
            <ArmorClass />
            <Initiative stats={props.stats} />
            <Speed race={props.race} />
        </div>
        <CurrentHp />
        <TempHp />
        <div className="central-bot-row">
            <HitDice charClass={props.charClass}/>
            <DeathSaves />
        </div>
    </div>)
}

export default CentralStats;