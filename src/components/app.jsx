import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { BoundingRect, DragLayer } from "./draggable";
import { Container, TileBar } from "./tiles";
import { Alert, AlertButton, CircleButton, FloatingMenu, Modal } from "./popovers";
import { Tab, Tabs } from "./tabs";
import { ColorSettings, ThemeTiles, THEMES } from "./color";
import * as Media from "../media";
import "../css/index.scss";

const root = document.querySelector(":root");

const changeColor = (cssVar, hsl, hasHighlight = true) => {
    setHSL(cssVar, hsl, hasHighlight);
    localStorage.setItem(cssVar, JSON.stringify(hsl));
};

const setHSL = (cssVar, { hue, saturation, lightness }, hasHighlight = true) => {
    root.style.setProperty(cssVar, `hsl(${hue}, ${saturation}%, ${lightness}%)`);
    if (hasHighlight) root.style.setProperty(`${cssVar}-highlight`, `hsl(${hue}, ${saturation}%, ${lightness + 10}%)`);
};

const App = () => {
    const dispatch = useDispatch();

    const isConfirmationOpen = useSelector(state => Object(state.modals.find(modal => modal.id === "confirm-delete")).isOpen);
    const isColorSettingsOpen = useSelector(state => Object(state.modals.find(modal => modal.id === "color-settings")).isOpen);
    const [isEraseMode, setIsEraseMode] = useState(false);
    const [isSnapToGrid, setIsSnapToGrid] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [hasElkoninBoxes, setHasElkoninBoxes] = useState(false);

    useEffect(() => {
        Object.keys(THEMES.get("Light")).forEach(cssVar => {
            const stored = localStorage.getItem(cssVar);
            stored ? setHSL(cssVar, JSON.parse(stored)) : changeColor(cssVar, THEMES.get("Light")[cssVar]);
        });
    }, []);

    return (
        <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
            <div className="common">
                <TileBar hasElkonin={hasElkoninBoxes} isUpperCase={isUpperCase} />
                <BoundingRect>
                    <Container hasElkoninBoxes={hasElkoninBoxes} hasSnapToGrid={isSnapToGrid} isEraseMode={isEraseMode} />
                    <DragLayer />
                    <FloatingMenu>
                        <CircleButton title="Delete all tiles" onClick={() => dispatch(actions.modalOpened("confirm-delete"))}>
                            <Media.TrashcanSVG />
                            { isConfirmationOpen ? (
                                <Alert id="confirm-delete" heading="Delete all tiles?" icon={<Media.TrashcanSVG />}
                                    modalClasses="pad-ctn-2 border-foreground-highlight" iconClasses="background-highlight">
                                    <AlertButton text="Delete" classes="red" onClick={() => dispatch(actions.tilesDeleted())} />
                                </Alert>
                            ) : null}
                        </CircleButton>
                        <CircleButton title={`${isEraseMode ? "Disable" : "Enable"} erase mode`} onClick={() => setIsEraseMode(!isEraseMode)} isActive={isEraseMode}>
                            <Media.EraserSVG />
                        </CircleButton>
                        <CircleButton title={`${isSnapToGrid ? "Disable" : "Enable"} snap to grid`} onClick={() => setIsSnapToGrid(!isSnapToGrid)} isActive={isSnapToGrid}>
                            <Media.GridSVG />
                        </CircleButton>
                        <CircleButton title={`${hasElkoninBoxes ? "Disable" : "Enable"} Elkonin boxes`} onClick={() => setHasElkoninBoxes(!hasElkoninBoxes)} isActive={hasElkoninBoxes}>
                            <Media.ThreeSquaresSVG />
                        </CircleButton>
                        <CircleButton title={`${isUpperCase ? "Disable" : "Enable"} uppercase`} onClick={() => setIsUpperCase(!isUpperCase)} isActive={isUpperCase}>
                            <span>A</span>
                        </CircleButton>
                        <CircleButton title="Change colors" onClick={() => dispatch(actions.modalOpened("color-settings"))}>
                            <Media.PaintPaletteSVG />
                            { isColorSettingsOpen ? (
                                <Modal id="color-settings" classes="color-settings" hasHeader>
                                    <Tabs containerClasses="full-width" tabClasses="pad-ctn-1 a-center">
                                        <Tab label="Themes">
                                            <ThemeTiles handleChange={changeColor} />
                                        </Tab>
                                        <Tab label="Page">
                                            <ColorSettings handleChange={changeColor} settings={[
                                                { title: "Background", cssVar: "--background-color" },
                                                { title: "Foreground", cssVar: "--foreground-color" },
                                                { title: "Text", cssVar: "--text-color" },
                                                { title: "Accent", cssVar: "--accent-color" },
                                                { title: "Accent Fill", cssVar: "--accent-fill-color" },
                                            ]} />
                                        </Tab>
                                        <Tab label="Tiles">
                                            <ColorSettings handleChange={changeColor} settings={[
                                                { title: "Background", cssVar: "--tile-background-color" },
                                                { title: "Text", cssVar: "--tile-text-color" },
                                            ]} />
                                        </Tab>
                                    </Tabs>
                                </Modal>
                            ) : null}
                        </CircleButton>
                    </FloatingMenu>
                </BoundingRect>
            </div>
        </DndProvider>
    );
}

export default App;