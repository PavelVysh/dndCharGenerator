import React from "react";
import alignments from "../../data/alignments";

function AlignmentSelector() {
    return <div className="grid-item">
    <label htmlFor="alignment">Alignment</label>
    <br />
    <select size={1} type="text" name="alignment" id="alignment">
        {alignments().map((ali) => (
            <option value={ali} key={ali}>{ali}</option>
        ))}
    </select>
</div>
}

export default AlignmentSelector;