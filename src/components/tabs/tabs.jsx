import React, { useState } from "react";

const Tabs = ({ children, classes, isColumnar }) => {
    const [activeTab, setActiveTab] = useState(0);
    const activeChild = children ? children[activeTab].props : null;

    return (
        <div className={`${classes ?? ""}${isColumnar ? " row" : " column"}`}>
            <div className={`tab-buttons${isColumnar ? " column" : " row"}`}>
                {children && children.map(({ props: { index, label }}) =>
                    <Tab key={index} index={index} label={label} switchTab={setActiveTab} activeTab={activeTab} />
                )}
            </div>
            <div className={`tab-content${activeChild.className ? " " + activeChild.className : ""}`}>
                {activeChild.children}
            </div>
        </div>
    );
}

const Tab = ({ index, label, switchTab, activeTab }) => (
    <div onClick={() => switchTab(index)} className={`tab-button${activeTab === index ? " active" : ""}`}>
        {label}
    </div>
);

export default Tabs;