import React, { useContext } from "react";
import { CharCreationContext } from "../../charCreation";

function Bonds() {

    const {bonds, setBonds} = useContext(CharCreationContext);

    function enter(event) {
        if (event.key === "Enter") {
            const value = event.target.value;
            console.log(value);
            setBonds(prev => [...prev, value]);
            event.target.value = "";
        }
    }

    function remove(index) {
        setBonds(prev => prev.filter((_, i) => index !== i));
    }

    return <div className="bonds">
        <input onKeyDown={enter} name="bonds" placeholder="Bonds"></input>
        {bonds.map((bond, index) =>
            <div key={index}>
                <p className="bond zero-margin inline">{bond}</p>
                <button onClick={() => remove(index)}>Remove</button>
            </div>
        )}
        <p className="center zero-margin">Bonds</p>
    </div>
}

export default Bonds;