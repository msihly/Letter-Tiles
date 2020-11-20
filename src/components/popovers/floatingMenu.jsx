import React, { Children, cloneElement } from "react";

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

const FloatingMenu = ({ children }) => (
    <div className="floating-menu">
        {children && Children.map(children, (child, idx) => cloneElement(child, { key: idx }))}
    </div>
);

export default FloatingMenu;