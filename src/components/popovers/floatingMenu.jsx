import React from "react";

const FloatingMenu = ({ children }) => (
    <div className="floating-menu">{children}</div>
);

export const CircleButton = ({ children, classes, isActive, onClick, title }) => {
    const getClasses = () => {
        let className = "circle-button";
        if (isActive === false) className += " inactive";
        if (classes) className += " " + classes;
        return className;
    };

    return (
        <div title={title} className={getClasses()} onClick={onClick}>
            {children}
        </div>
    );
};

export default FloatingMenu;