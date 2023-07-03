import React from "react";
import CharCreationStats from "./charCreationStats";
import CentralStats from "../centralStats";

function Main() {
    return (<div className="main">
        <CharCreationStats />
        <CentralStats />
    </div>);
}

export default Main;