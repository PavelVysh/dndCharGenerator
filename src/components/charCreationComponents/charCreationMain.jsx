import React from "react";
import CharCreationStats from "./charCreationStats";

function Main(props) {
    return (<div className="main">
        <CharCreationStats stats={props.stats} setStats={props.setStats}/>
    </div>);
}

export default Main;