import React from "react";
import LabelInput from "./subParts/labelInput";
import GridItem from "./subParts/gridItem";

function CharCreationHeader() {
   return <div className="wrapper">
      <div className="header char-name container">
         <div className="vert-center">
            <LabelInput labelFor="char-name" labelText="Character name" inputSize="8" inputType="text" inputName="char-name" inputId="char-name" />
            <LabelInput labelFor="char-level" labelText="Character level" inputSize="8" inputType="text" inputName="char-level" inputId="char-level" />
         </div>
      </div>
      <div className="header stats container">
         <div className="header stats grid">
            <GridItem labelFor="class-level" labelText="Class" inputSize="8" inputType="text" inputName="class-level" inputId="class-level" br=<br /> />
            <GridItem labelFor="background" labelText="Background" inputSize="8" inputType="text" inputName="background" inputId="background" br=<br /> />
            <GridItem labelFor="player-name" labelText="Player Name" inputSize="8" inputType="text" inputName="player-name" inputId="player-name" br=<br /> />
            <GridItem labelFor="race" labelText="Race" inputSize="8" inputType="text" inputName="race" inputId="race" br=<br /> />
            <GridItem labelFor="alignment" labelText="Alignment" inputSize="8" inputType="text" inputName="alignment" inputId="alignment" br=<br /> />
            <GridItem labelFor="experience" labelText="Experience" inputSize="8" inputType="text" inputName="experience" inputId="experience" br=<br /> />
         </div>
      </div>
   </div>
}

export default CharCreationHeader;