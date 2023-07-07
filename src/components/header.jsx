import React from "react";
import Save from "./charCreationComponents/headerparts/save";

function Header() {
    return <div className="header-div">
        <p className="zero-margin">I am a header</p>
        <a href="/load">Load</a>
        <a href="/">Home</a>
        <Save />
    </div>
}

export default Header;