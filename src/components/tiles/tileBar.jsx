import React from "react";
import { Tile } from "./";
import { Tabs } from "../tabs";

const CHAR_SETS = new Map([
    ["alphabet", {
        label: "Alphabet & Common",
        left: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        right: ["ch", "ck", "ph", "sh", "th", "wh", "tch", "dge"],
    }],
    ["advancedVowels", {
        label: "Advanced Vowels",
        left: ["ai", "au", "aw", "ay", "ea", "ee", "eigh", "ew", "ue", "ey", "ie", "igh", "oa", "oi", "oo", "ou", "ow", "oy"],
        right: ["or", "ar", "er", "ur", "ir", "ear", "oar", "ore", "our", "oor"],
    }],
    ["consonants", {
        label: "Consonants",
        left: ["ff", "ll", "ss", "zz", "ge", "ce", "gh", "gn", "gu", "kn", "mb", "mn", "que", "se", "wr"],
    }],
    ["affixes", {
        label: "Affixes",
        left: ["de", "dis", "en", "in", "mis", "pre", "re", "sub", "un"],
        right: ["al", "cial", "cian", "cious", "ed", "er", "es", "s", "est", "ful", "ing", "less", "ness", "ly", "ment", "sion", "tial", "tian", "tion", "ture"],
    }],
    ["chunks", {
        label: "Chunks",
        left: ["all", "am", "an", "ang", "ing", "ong", "ung", "ank", "ink", "onk", "unk"],
        right: ["ble", "cle", "dle", "fle", "gle", "kle", "ple", "stl", "tle", "zle"]
    }]
]);

const TileBar = () => {
    const getTiles = (charSet, side = "left", typeCase = "lower") => {
        let tiles = charSet[side];
        if (typeCase === "upper") tiles = tiles.map(c => c.toUpperCase());

        return tiles.map(e => <Tile key={e} id={e} content={e} isSource />);
    };

    return (
        <Tabs classes="tilebar">
            {Array.from(CHAR_SETS.values(), (charSet, idx) => (
                <label key={idx} index={idx} label={charSet.label} className="tile-container">
                    {charSet.left && <div className="tiles">{getTiles(charSet, "left")}</div>}
                    {charSet.right && <div className="tiles">{getTiles(charSet, "right")}</div>}
                </label>
            ))}
        </Tabs>
    );
};

export default TileBar;