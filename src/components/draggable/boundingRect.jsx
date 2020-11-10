import React, { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";

const BoundingRect = ({ children }) => {
    const node = useRef(null);
    const [boundingNode, setBounds] = useState(null);
    useEffect(() => setBounds(node.current), []);

    return (
        <div ref={node} className="bounding-rect">
            {children && Children.map(children, (child, key) =>
                isValidElement(child) ? cloneElement(child, { key, boundingNode }) : child
            )}
        </div>
    );
};

export default BoundingRect;
