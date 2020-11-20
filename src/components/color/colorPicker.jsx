import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Slider } from "./";

const ColorPicker = ({ cssVar, handleChange, hasSaturation, hasLightness, initHsl, isAdvanced }) => {
    if (initHsl) initHsl = JSON.parse(initHsl);

    const hue = useSelector(state => Object(state.inputs.find(input => input.id === `${cssVar}-hue`)).value);
    const saturation = useSelector(state => Object(state.inputs.find(input => input.id === `${cssVar}-saturation`)).value);
    const lightness = useSelector(state => Object(state.inputs.find(input => input.id === `${cssVar}-lightness`)).value);

    useEffect(() => {
        if (hue !== undefined && saturation !== undefined && lightness !== undefined) handleChange(cssVar, { hue, saturation, lightness });
    }, [cssVar, handleChange, hue, saturation, lightness]);

    return (
        <div className="color-picker">
            <Slider type="hue" cssVar={cssVar} initValue={initHsl?.hue} />
            {isAdvanced && hasSaturation && (
                <Slider type="saturation" cssVar={cssVar} initValue={initHsl?.saturation}
                    style={{ background: `linear-gradient(to right, hsl(${hue}, 0%, 50%), hsl(${hue}, 100%, 50%))` }} />
            )}
            {isAdvanced && hasLightness && (
                <Slider type="lightness" cssVar={cssVar} initValue={initHsl?.lightness}
                    style={{ background: `linear-gradient(to right, black 0%, hsl(${hue}, ${saturation}%, 50%) 50%, white 100%)` }} />
            )}
        </div>
    );
};

export default ColorPicker;