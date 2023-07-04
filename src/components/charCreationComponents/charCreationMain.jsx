import React from "react";
import CharCreationStats from "./charCreationStats";
import CentralStats from "../centralStats";
import PIBF from "./PIBF";

function CharCreationMain() {
    return (<div className="main">
        <CharCreationStats />
        <CentralStats />
        <PIBF />
    </div>);
}

export default CharCreationMain;