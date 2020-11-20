import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const Slider = ({ cssVar, initValue, style, type }) => {
    const id = `${cssVar}-${type}`;
    const dispatch = useDispatch();

    if (initValue === undefined) initValue = type === "hue" ? 1 : 50;

    const current = useSelector(state => Object(state.inputs.find(input => input.id === id)).value) ?? initValue;

    useEffect(() => {
        dispatch(actions.inputCreated(id, initValue));

        return () => dispatch(actions.inputDeleted(id));
    }, [id, initValue, dispatch]);

    return (
        <input type="range" className={`slider ${type}`} style={style ?? null} min="1" max={type === "hue" ? "360" : "100"}
            step="1" value={current} onChange={e => dispatch(actions.inputUpdated(id, +e.target.value))} />
    );
};

export default Slider;