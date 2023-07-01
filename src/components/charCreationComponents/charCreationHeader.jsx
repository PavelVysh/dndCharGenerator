import React from "react";

function CharCreationHeader() {
    return <div className="wrapper">
    <div className="header char-name container">
    <div className="vert-center">
         <div>
           <label for="char-name">Character name</label>
           <input size="8" type="text" name="char-name"></input>
        </div>
        <div>
           <label for="char-level">Character level</label>
           <input size="2" type="text" name="char-level"></input>
        </div>
        </div>
    </div>
    <div className="header stats container">
     <div className="header stats grid">
     <div className="grid-item">
        <input type="text" size="8" name="class-level"></input>
        <br/>
        <label for="class-level">Class</label>
     </div>
     <div className="grid-item">
        <input type="text" size="8" name="background"></input>
        <br/>
        <label for="background">Background</label>
     </div>
     <div className="grid-item">
        <input type="text" size="8" name="player-name"></input>
        <br/>
        <label for="player-name">Player Name</label>
     </div>
     <div className="grid-item">
        <input type="text" size="8" name="race"></input>
        <br/>
        <label for="race">Race</label>
     </div>
     <div className="grid-item">
        <input type="text" size="8" name="alignment"></input>
        <br/>
        <label for="alignment">Alignment</label>
     </div>
     <div className="grid-item">
        <input type="text" size="8" name="experience"></input>
        <br/>
        <label for="experience">Experience</label>
     </div>
        </div>
    </div>
    </div>
}

export default CharCreationHeader;