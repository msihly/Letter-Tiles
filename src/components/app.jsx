import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { BoundingRect, DragLayer } from "./draggable";
import { Container, TileBar } from "./tiles";
import { Alert, AlertButton, FloatingMenu } from "./popovers";
import * as Media from "../media";
import "../css/index.scss";

const App = () => {
    const dispatch = useDispatch();

    const isConfirmationOpen = useSelector(state => Object(state.modals.find(modal => modal.id === "confirm-delete")).isOpen);
    const [isEraseMode, setIsEraseMode] = useState(false);
    const [isSnapToGrid, setIsSnapToGrid] = useState(false);

    return (
        <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
            <div className="common">
                <TileBar />
                <BoundingRect>
                    <Container hasSnapToGrid={isSnapToGrid} isEraseMode={isEraseMode} />
                    <DragLayer hasSnapToGrid={isSnapToGrid} />
                    <FloatingMenu>
                        <li title="Delete all tiles" onClick={() => dispatch(actions.modalOpened("confirm-delete"))}>
                            <img src={Media.Trashcan} alt="Trashcan icon" />
                            { isConfirmationOpen ? (
                                <Alert id="confirm-delete" modalClasses="pad-ctn-2 border-red" iconClasses="red-1-svg" icon={Media.Trashcan} heading="Delete all tiles?">
                                    <AlertButton text="Delete" classes="red" onClick={() => dispatch(actions.tilesDeleted())} />
                                </Alert>
                            ) : null}
                        </li>
                        <li title={`${isEraseMode ? "Disable" : "Enable"} erase mode`} onClick={() => setIsEraseMode(!isEraseMode)} isActive={isEraseMode}>
                            <img src={Media.Eraser} alt="Eraser icon" />
                        </li>
                        <li title="Snap to grid" onClick={() => setIsSnapToGrid(!isSnapToGrid)} isActive={isSnapToGrid}>
                            <img src={Media.Grid} alt="Grid icon" />
                        </li>
                    </FloatingMenu>
                </BoundingRect>
            </div>
        </DndProvider>
    );
}

export default App;