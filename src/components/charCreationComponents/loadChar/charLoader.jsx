import {useContext, useEffect} from "react";
import { CharCreationContext } from "../../charCreation";

function CharLoader(props) {

    const {setRace, setCharClass} = useContext(CharCreationContext);

    useEffect(() => {
        if(props.character !== null) {
           document.getElementById('char-name').value = props.character.name;
           setRace(prev => prev = props.character.race);
           setCharClass(prev => prev = props.character.charClass);
           document.getElementById('char-level').value = props.character.level;
           document.getElementById('background').value = props.character.background;
           document.getElementById('alignment').value = props.character.alignment;
           document.getElementById('player-name').value = props.character.playerName;
           document.getElementById('experience').value = props.character.experience;
        }
     }, [props.character, setRace, setCharClass]);

}

export default CharLoader;