import React from "react";
import { useDragLayer } from "react-dnd";
import { itemTypes, snapToGrid } from "./";
import { Tile } from "../tiles";

const DragLayer = ({ hasSnapToGrid, boundingNode }) => {
    const {
        item,
        itemType,
        itemOffset,
        initItemOffset,
        deltaOffset,
        isDragging,
    } = useDragLayer(monitor => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        itemOffset: monitor.getSourceClientOffset(),
        initItemOffset: monitor.getInitialSourceClientOffset(),
        deltaOffset: monitor.getDifferenceFromInitialOffset(),
		isDragging: monitor.isDragging(),
    }));

    const getStyle = () => {
        if (!initItemOffset || !itemOffset) { return { display: "none" }; }

        const bounds = boundingNode.getBoundingClientRect();
        let left = item.isSource ? itemOffset.x : bounds.left + deltaOffset.x;
        let top = item.isSource ? itemOffset.y : bounds.top + deltaOffset.y;
        if (hasSnapToGrid) [left, top] = snapToGrid(left, top);

        return { transform: `translate(${left}px, ${top}px)` };
    };

    if (!isDragging) { return null; }

	return (
		<div className="drag-layer">
			<div style={getStyle()}>
                {itemType === itemTypes.TILE && <Tile {...item} />}
            </div>
		</div>
	);
};

export default DragLayer;