import React from "react";
import CharCreationStats from "./charCreationStats";
import CentralStats from "../centralStats";
import PIBF from "./PIBF";
import Languages from "./subParts/languages";
import Features from "./subParts/features";
import Attacks from "./attacks";
import Equipment from "./subParts/equipment";

function CharCreationMain() {
    return (<div className="main">
        <CharCreationStats />
        <CentralStats />
        <PIBF />
        <Languages />
        <Features />
        <Attacks />
        <Equipment />
    </div>);
}

export default CharCreationMain;