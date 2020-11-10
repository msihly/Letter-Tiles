import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { useDrag } from "react-dnd";
import { itemTypes } from "../draggable";

const Tile = ({ id, content, classes, isSource, handleClick }) => {
    const dispatch = useDispatch();
    const { left, top } = useSelector(state => Object(state.tiles.find(tile => tile.id === id)));

    const getClasses = () => {
        let className = "tile";
        if (classes) className += ` ${classes}`;
        if (!isSource) className += " draggable";
        if (isDragging) className += " dragging";
        if (isSource) className += " source";
        return className;
    };

    const getStyle = () => ({ transform: `translate(${left}px, ${top}px)` });

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: itemTypes.TILE, id, content, classes, isSource },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                const itemProps = {
                    id: isSource ? `${item.id}-${Math.trunc(Math.random() * 1000000)}` : item.id,
                    content: item.content,
                    classes: item.classes ?? null,
                    left: dropResult.left,
                    top: dropResult.top,
                };
                dispatch(isSource ? actions.tileCreated(itemProps) : actions.tileUpdated(itemProps));
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    useEffect(() => { preview(<img src="" alt="" />, { captureDraggingState: true }); });

    return (
        <div ref={drag} onClick={handleClick ?? null} className={getClasses()} style={getStyle()}>
            {content}
        </div>
    );
};

export default Tile;