import React from "react";

function ArmorClass() {
    return (
        <div className="third">
            <input type="number" className="center" name="armorClass" size="8"></input>
            <label htmlFor="armorClass" >Armor Class</label>
        </div>
    );
}

export default ArmorClass;