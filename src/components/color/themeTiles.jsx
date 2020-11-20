import React, { useState } from "react";
import { THEMES, themeToStyle } from "./";

const ThemeIcon = ({ cssVars, handleClick, isActive, name }) => (
    <div onClick={handleClick} className={`theme-tile${isActive ? ` active` : ""}`}>
        <div className="theme-icon" style={themeToStyle(cssVars)} title={name}>
            <div className="letter-tile">a</div>
        </div>
        <p>{name}</p>
    </div>
);

const ThemeTiles = ({ handleChange }) => {
    const [activeTheme, setActiveTheme] = useState(localStorage.getItem("theme") ?? null);

    const activateTheme = (name, theme) => {
        for (let cssVar in theme) handleChange(cssVar, theme[cssVar]);
        localStorage.setItem("theme", name);
        setActiveTheme(name);
    };

    return (
        <div className="color-themes">
            {Array.from(THEMES.entries(), ([name, value], index) => (
                <ThemeIcon key={name} name={name} cssVars={value} isActive={activeTheme === name}
                    handleClick={() => activateTheme(name, value)} />
            ))}
        </div>
    );
};

export default ThemeTiles;