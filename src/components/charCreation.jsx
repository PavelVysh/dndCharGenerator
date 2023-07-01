import React from "react";
import CharCreationHeader from "./charCreationComponents/charCreationHeader";
import Main from "./charCreationComponents/charCreationMain";

function CharCreation() {
    return <div className="char-create container">
        <CharCreationHeader />
        <Main />
    </div>;
}

export default CharCreation;