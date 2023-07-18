import React, { useContext} from "react";
import PassiveWisdom from "./passiveWisdom";
import { CharCreationContext } from "../../charCreation";

function Languages() {

    const {languages, setLanguages} = useContext(CharCreationContext);

    function enter(event) {
        const value = event.target.value;
        if (event.key === "Enter") {
            setLanguages(prev => [...prev, value]);
            event.target.value = "";
        }
    }

    function removeLanguage(index) {
        setLanguages(prev => {
            return prev.filter((_, i) => i !== index);
        })
    }

    return <div className="languages">
        <PassiveWisdom />
        <div className="proficiencies">
            <input onKeyDown={enter} name="languages" placeholder="Add known language"></input>
            {languages.map((prof, index) => {
                return <div key={index}>
                    <p className="prof zero-margin inline">{prof}</p>
                    <button className="delete-button" onClick={() => removeLanguage(index)}>-</button>
                </div>
            })}
            <p className="center zero-margin">Other Proficiencies & Languages</p>
        </div>
    </div>
}

export default Languages;