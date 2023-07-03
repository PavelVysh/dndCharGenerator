import React from "react";
import ArmorClass from "./charCreationComponents/subParts/centralStats/armor";
import Initiative from "./charCreationComponents/subParts/centralStats/initianive";
import Speed from "./charCreationComponents/subParts/centralStats/speed";

function CentralStats() {
    return (<div className="central-stats container">
        <div className="central-top-row">
            <ArmorClass />
            <Initiative />
            <Speed />
        </div>
    </div>)
}

export default CentralStats;