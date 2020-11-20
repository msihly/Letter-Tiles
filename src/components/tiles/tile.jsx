import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { useDrag } from "react-dnd";
import { itemTypes, snapToGrid } from "../draggable";

const Tile = ({ id, content, classes, isSource, hasSnapToGrid, handleClick }) => {
    const dispatch = useDispatch();

    const { left, top, backgroundColor, textColor } = useSelector(state => Object(state.tiles.find(tile => tile.id === id)));

    const getClasses = () => {
        let className = "tile";
        if (classes) className += ` ${classes}`;
        if (!isSource) className += " draggable";
        if (isDragging) className += " dragging";
        if (isSource) className += " source";
        return className;
    };

    const getStyle = () => ({
        backgroundColor: isSource ? null : `hsl(${backgroundColor.hue}deg, ${backgroundColor.saturation}%, ${backgroundColor.lightness}%)`,
        color: isSource ? null : `hsl(${textColor.hue}deg, ${textColor.saturation}%, ${textColor.lightness}%)`,
        transform: `translate(${left}px, ${top}px)`,
    });

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: itemTypes.TILE, id, content, classes, isSource },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();

            if (item && dropResult) {
                let [left, top] = [dropResult.left, dropResult.top];
                if (hasSnapToGrid) [left, top] = snapToGrid(left, top);

                const itemProps = {
                    id: isSource ? `${item.id}-${Math.trunc(Math.random() * 1000000)}` : item.id,
                    content: item.content ?? null,
                    classes: item.classes ?? null,
                    left,
                    top,
                };

                dispatch(isSource ? actions.tileCreated({
                    ...itemProps,
                    backgroundColor: JSON.parse(localStorage.getItem("--tile-background-color")),
                    textColor: JSON.parse(localStorage.getItem("--tile-text-color")),
                }) : actions.tileUpdated(itemProps));
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    useEffect(() => { preview(<img src="" alt="" />, { captureDraggingState: true }); });

    return (
        <div ref={drag} onClick={handleClick ?? null} className={getClasses()} style={getStyle()}>
            {content ?? null}
        </div>
    );
};

export default Tile;