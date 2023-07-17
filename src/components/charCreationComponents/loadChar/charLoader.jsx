import {useContext, useEffect} from "react";
import { CharCreationContext } from "../../charCreation";

function CharLoader(props) {

    const {setRace, setCharClass, setStats, setStStats, setSkills, setLevel, setProficiency, setLanguages, setWeapons, setEquip} = useContext(CharCreationContext);

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
           document.getElementById('armorClass').value = props.character.armorClass;
           document.getElementById('maxHp').value = props.character.maxHp;
           document.getElementById('currentHp').value = props.character.currentHp;
           document.getElementById('tempHp').value = props.character.tempHp;
           document.getElementById('totalHitDice').value = props.character.totalHitDice;
           document.getElementById('s1').checked = props.character.deathSaveFailures.t1;
           document.getElementById('s2').checked = props.character.deathSaveFailures.t2;
           document.getElementById('s3').checked = props.character.deathSaveFailures.t3;
           document.getElementById('d1').checked = props.character.deathSaveSuccesses.t1;
           document.getElementById('d2').checked = props.character.deathSaveSuccesses.t2;
           document.getElementById('d3').checked = props.character.deathSaveSuccesses.t3; 
           setWeapons(props.character.weapons);
           setEquip(props.character.equipment);
           document.getElementById('CP').value = props.character.copper;
           document.getElementById('SP').value = props.character.silver;
           document.getElementById('GP').value = props.character.gold;
           document.getElementById('PP').value = props.character.platinum;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

}

export default CharLoader;