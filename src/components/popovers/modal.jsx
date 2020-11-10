import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { Portal } from "./";

const Modal = ({ children, classes, hasHeader, id }) => {
    const dispatch = useDispatch();

    const closeModal = (event) => {
        event.stopPropagation();
        dispatch(actions.modalClosed(id));
    };

    const handleClick = (event) => event.stopPropagation();

    return (
        <Portal>
            <div onMouseDown={closeModal} onMouseUp={handleClick} onClick={handleClick} className="modal-container dark">
                <div onMouseDown={handleClick} onMouseUp={handleClick} onClick={handleClick} className={`modal-content ${classes ?? ""}`}>
                    {hasHeader && (
                        <div className="modal-header">
                            <span onClick={closeModal} className="close">&times;</span>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </Portal>
    );
}

export default Modal;