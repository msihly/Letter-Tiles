import React from "react";
import { CHAR_SETS, Tile } from "./";
import { Tab, Tabs } from "../tabs";

const TileBar = ({ hasElkonin, isUpperCase }) => {
    const getTiles = (charSet) => {
        let tiles = charSet;
        if (isUpperCase) tiles = tiles.map(c => c.toUpperCase());
        return tiles.map(e => <Tile key={e} id={e} content={e} isSource />);
    };

    return (
        <Tabs containerClasses="tilebar" initTab={hasElkonin ? 0 : null}>
            {hasElkonin && (
                <Tab index={0} label="Elkonin" className="tile-container">
                    <div className="tiles">
                        {["red", "orange", "yellow", "green", "blue", "purple"].map(color =>
                            <Tile key={color} id={`elkonin-${color}`} classes={`elkonin-${color}`} isSource />
                        )}
                    </div>
                </Tab>
            )}
            {Array.from(CHAR_SETS.entries(), ([name, values], index) => (
                <Tab key={name} index={hasElkonin ? index + 1 : index} label={name} className="tile-container">
                    {values.map((charSet, i) => <div key={i} className="tiles">{getTiles(charSet)}</div>)}
                </Tab>
            ))}
        </Tabs>
    );
};

export default TileBar;