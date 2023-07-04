import React from "react";
import PersonalityTraits from "./PIBFParts/personalityTraits";
import Ideals from "./PIBFParts/ideals";
import Bonds from "./PIBFParts/bonds";
import Flaws from "./PIBFParts/flaws";

function PIBF() {
    return <div className="PIBF">
        <PersonalityTraits />
        <Ideals />
        <Bonds />
        <Flaws />
    </div>
}

export default PIBF;