import React from "react";
import LabelInput from "./labelInput";

function CharCreationHeader() {
    return <div className="wrapper">
    <div className="header char-name container">
    <div className="vert-center">
         <div>
            <LabelInput labelFor="char-name" labelText="Character name" inputSize="8" inputType="text" inputName="char-name" inputId="char-name"/>
        </div>
        <div>
           <LabelInput labelFor="char-level" labelText="Character level" inputSize="8" inputType="text" inputName="char-level" inputId="char-level"/>
        </div>
        </div>
    </div>
    <div className="header stats container">
     <div className="header stats grid">
     <div className="grid-item">
        <LabelInput labelFor="class-level" labelText="Class" inputSize="8" inputType="text" inputName="class-level" inputId="class-level" br=<br/>/>
     </div>
     <div className="grid-item">
        <LabelInput labelFor="background" labelText="Background" inputSize="8" inputType="text" inputName="background" inputId="background" br=<br/>/>
     </div>
     <div className="grid-item">
       <LabelInput labelFor="player-name" labelText="Player Name" inputSize="8" inputType="text" inputName="player-name" inputId="player-name" br=<br/>/>
     </div>
     <div className="grid-item">
       <LabelInput labelFor="race" labelText="Race" inputSize="8" inputType="text" inputName="race" inputId="race" br=<br/>/>
     </div>
     <div className="grid-item">
       <LabelInput labelFor="alignment" labelText="Alignment" inputSize="8" inputType="text" inputName="alignment" inputId="alignment" br=<br/>/>
     </div>
     <div className="grid-item">
      <LabelInput labelFor="experience" labelText="Class" inputSize="8" inputType="text" inputName="experience" inputId="experience" br=<br/>/>
     </div>
        </div>
    </div>
    </div>
}

export default CharCreationHeader;