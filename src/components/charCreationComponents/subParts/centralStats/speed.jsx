import React, { useContext } from "react";
import { CharCreationContext } from "../../../charCreation";

function Speed() {

    const {race} = useContext(CharCreationContext);

    function getSpeed() {
        switch (race) {
            case "Dwarf":
            case "Gnome": return 25;
            default: return 30;
        }
    }


    return (
        <div className="third">
            <input type="number" className="center" name="speed" id="speed" size="8" value={getSpeed()} readOnly></input>
            <label htmlFor="speed" >Speed</label>
        </div>
    );
}

export default Speed;