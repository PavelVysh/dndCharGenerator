import React from "react";
import CharCreationStats from "./charCreationStats";
import CentralStats from "../centralStats";

function Main(props) {
    return (<div className="main">
        <CharCreationStats stats={props.stats} setStats={props.setStats}/>
        <CentralStats />
    </div>);
}

export default Main;