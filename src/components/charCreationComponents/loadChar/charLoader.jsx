import {useContext, useEffect} from "react";
import { CharCreationContext } from "../../charCreation";

function CharLoader(props) {

    const {setRace, setCharClass, setStats, setStStats, setSkills, setLevel, setProficiency, setLanguages} = useContext(CharCreationContext);

    useEffect(() => {
        if(props.character !== null) {
           document.getElementById('char-name').value = props.character.name;
           setRace(props.character.race);
           setCharClass(props.character.charClass);
           setStats(props.character.stats);
           setLevel(Number(props.character.level));
           document.getElementById('background').value = props.character.background;
           document.getElementById('alignment').value = props.character.alignment;
           document.getElementById('player-name').value = props.character.playerName;
           document.getElementById('experience').value = props.character.experience;
           document.getElementById('inspiration').value = props.character.inspiration;
           setStStats(props.character.savingThrows);
           setSkills(props.character.skills);
           setProficiency(Number(props.character.proficiency));
           setLanguages(props.character.languages);
        }
     }, [props.character, setRace, setCharClass, setStats, setStStats, setSkills, setLevel, setProficiency, setLanguages]);

}

export default CharLoader;