import React from "react";
import Stat from "./subParts/mainStat";

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
    </div>
}

export default Stats;