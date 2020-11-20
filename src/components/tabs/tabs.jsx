import React, { Children, cloneElement, useState } from "react";
import { useEffect } from "react";
import { SideScroller } from "./";

export const Tab = ({ index, isActive, label, switchTab }) => (
    <div onClick={() => switchTab(index)} className={`tab-button${isActive ? " active" : ""}`}>
        {label}
    </div>
);

const Tabs = ({ children, containerClasses, initTab, isColumnar, tabClasses }) => {
    children = [...children].flat().filter(e => e !== null && e !== false);

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        if (initTab !== undefined && initTab !== null) setActiveTab(initTab);
    }, [initTab]);

    const activeChild = children ? children[activeTab]?.props : null;

    const getTabClasses = () => {
        let className = "tab-content";
        if (activeChild.className) className += ` ${activeChild.className}`;
        if (tabClasses) className += ` ${tabClasses}`;
        return className;
    };

    return (
        <div className={`${containerClasses ?? ""}${isColumnar ? " row" : " column"}`}>
            <SideScroller>
                <div className={`tab-buttons${isColumnar ? " column" : " row"}`}>
                    {children && Children.map(children, (child, index) =>
                        cloneElement(child, {
                            key: index,
                            index: child.props?.index ?? index,
                            isActive: activeTab === index,
                            label: child.props.label,
                            switchTab: setActiveTab,
                        })
                    )}
                </div>
            </SideScroller>
            <div className={getTabClasses()}>
                {activeChild && activeChild.children}
            </div>
        </div>
    );
}

export default Tabs;