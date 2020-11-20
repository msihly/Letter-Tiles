import React from "react";
import { ColorPicker } from "./";

const ColorSettings = ({ handleChange, settings }) => (
    settings.map(setting => (
        <React.Fragment key={setting.cssVar}>
            <h2>{setting.title}</h2>
            <ColorPicker cssVar={setting.cssVar} initHsl={localStorage.getItem(setting.cssVar)}
                handleChange={handleChange} isAdvanced={true} hasSaturation hasLightness />
        </React.Fragment>
    ))
);

export default ColorSettings;