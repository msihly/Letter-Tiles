import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { useDrop } from "react-dnd";
import { Tile } from "./";
import { itemTypes, snapToGrid } from "../draggable";

const Container = ({ classes, boundingNode, hasSnapToGrid, isEraseMode }) => {
    const dispatch = useDispatch();
    const tiles = useSelector(state => state.tiles, shallowEqual);

    const getClasses = ({ canDrop, isOver, isEraseMode } = {}) => {
        let className = "container";
        if (classes) className += ` ${classes}`;
        if (isOver) className += ` ${canDrop ? "is-over" : "no-drop"}`;
        if (isEraseMode) className += " erase-mode";
        return className;
    }

    const [, drop] = useDrop({
        accept: itemTypes.TILE,
        drop: (item, monitor) => {
            const tile = tiles.find(tile => tile.id === item.id);
            const delta = monitor.getDifferenceFromInitialOffset();
            const offset = monitor.getSourceClientOffset();
            const bounds = boundingNode.getBoundingClientRect();

			let left = tile ? (tile.left + delta.x) : (offset.x - bounds.left);
            let top = tile ? (tile.top + delta.y) : (offset.y - bounds.top);
            if (hasSnapToGrid) [left, top] = snapToGrid(left, top);

			dispatch(actions.tileUpdated({ ...item, left, top }));
            return { left, top };
        }
    });

    return (
        <div ref={drop} className={getClasses({ isEraseMode })}>
            {tiles && tiles.map(tile => <Tile { ...tile } key={tile.id}
                handleClick={() => isEraseMode && dispatch(actions.tileDeleted(tile.id))} />)}
        </div>
    );
};

export default Container;