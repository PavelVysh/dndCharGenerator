import React from "react";
import CharCreationStats from "./charCreationStats";
import CentralStats from "../centralStats";
import PIBF from "./PIBF";
import Languages from "./subParts/languages";
import Features from "./subParts/features";

function CharCreationMain() {
    return (<div className="main">
        <CharCreationStats />
        <CentralStats />
        <PIBF />
        <Languages />
        <Features />
    </div>);
}

export default CharCreationMain;