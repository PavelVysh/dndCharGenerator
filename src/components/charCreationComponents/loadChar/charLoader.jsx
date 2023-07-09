import {useContext, useEffect} from "react";
import { CharCreationContext } from "../../charCreation";

function CharLoader(props) {

    const {setRace} = useContext(CharCreationContext);

    useEffect(() => {
        if(props.character !== null) {
           document.getElementById('char-name').value = props.character.name;
           setRace(props.character.race);
        }
     }, [props.character, setRace]);

}

export default CharLoader;