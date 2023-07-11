import React, { useContext} from "react";
import { CharCreationContext } from "../../charCreation";

function Skill(props) {

    const {skills, setSkills, proficiency} = useContext(CharCreationContext);

    function changeCheck() {
        setSkills(prev => ({...prev, [props.id]: {...prev[props.id], toggle: !prev[props.id].toggle}}))
    }

    function changeVal(event) {
        if (event.target.value > Number(props.stat) + (skills[props.id].toggle && 3) + skills[props.id].value) {
            setSkills(prev => ({...prev, [props.id]: {...prev[props.id], value : skills[props.id].value + 1}}))
        } else {
            setSkills(prev => ({...prev, [props.id]: {...prev[props.id], value : skills[props.id].value - 1}}))
        }
    }
    return <div>
        <input type="checkbox" onChange={changeCheck} checked={skills[props.id].toggle}></input>
        <input type="number" name={props.name} id={props.name} value={Number(props.stat) + (skills[props.id].toggle && proficiency) + skills[props.id].value} onChange={changeVal}></input>
        <label htmlFor={props.name}>{props.name}</label>
    </div>
}

export default Skill;