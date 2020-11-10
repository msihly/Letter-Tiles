import React, { Children } from "react";

const FloatingMenu = ({ children }) => {
    const getClasses = (isActive, className) => {
        let classes = "circle-button";
        if (isActive === false) classes += " inactive";
        if (className) classes += " " + className;
        return classes;
    }

    return (
        <div className="floating-menu">
            {children && Children.map(children, ({ props: { children, isActive, className, title, onClick }}, idx) => (
                <div key={idx} title={title} onClick={onClick} className={getClasses(isActive, className)}>
                    {children}
                </div>
            ))}
        </div>
    );
};

export default FloatingMenu;