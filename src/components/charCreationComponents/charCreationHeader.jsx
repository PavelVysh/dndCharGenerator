import React from "react";
import LabelInput from "./subParts/labelInput";
import GridItem from "./subParts/gridItem";
import RaceSelector from "./subParts/selectors/raceSelector";
import AlignmentSelector from "./subParts/selectors/alignmentSelector";
import ClassSelector from "./subParts/selectors/classSelector";

function CharCreationHeader(props) {
   return <div className="wrapper">
      <div className="header char-name container">
         <div className="vert-center">
            <LabelInput labelFor="char-name" labelText="Character name" inputSize="8" inputType="text" inputName="char-name" inputId="char-name" />
            <LabelInput labelFor="char-level" labelText="Character level" inputSize="8" inputType="text" inputName="char-level" inputId="char-level" />
         </div>
      </div>
      <div className="header stats container">
         <div className="header stats grid">
            <ClassSelector setClass={props.setClass}/>
            <GridItem labelFor="background" labelText="Background" inputSize="8" inputType="text" inputName="background" inputId="background" />
            <GridItem labelFor="player-name" labelText="Player Name" inputSize="8" inputType="text" inputName="player-name" inputId="player-name" />
            <RaceSelector stats={props.stats} setStats={props.setStats} setRace={props.setRace}/>
            <AlignmentSelector />
            <GridItem labelFor="experience" labelText="Experience" inputSize="8" inputType="text" inputName="experience" inputId="experience" />
         </div>
      </div>
   </div>
}

export default CharCreationHeader;