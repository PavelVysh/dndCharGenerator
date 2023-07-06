import React from "react";
import CharCreationStats from "./charCreationStats";
import CentralStats from "../centralStats";
import PIBF from "./PIBF";
import Languages from "./subParts/languages";

function CharCreationMain() {
    return (<div className="main">
        <CharCreationStats />
        <CentralStats />
        <PIBF />
        <Languages />
    </div>);
}

export default CharCreationMain;