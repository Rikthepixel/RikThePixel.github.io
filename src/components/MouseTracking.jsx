import React, { useEffect, useRef } from 'react';

const MouseTracking = ({ children, className, hideWithoutMouse }) => {
    const containerRef = useRef();
    useEffect(() => {
        const rotateArrow = (e) => {
            const container = containerRef.current;
            const rect = container.getBoundingClientRect();

            container.style.rotate = `${Math.atan2(
                rect.y - e.clientY + rect.width * 0.5,
                rect.x - e.clientX + rect.height * 0.5
            )}rad`;
        };

        window.addEventListener("mousemove", rotateArrow);
        return () => window.removeEventListener("mousemove", rotateArrow);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!hideWithoutMouse || !container) { return; }

        const hasMouseQuery = matchMedia("(pointer:fine)");
        const onMouseAdded = (result) => {
            console.log(result);
            container.style.visibility = result.matches ? "hidden" : "visible";
        };

        container.style.visibility = hasMouseQuery.matches ? "visible" : "hidden";
        hasMouseQuery.addEventListener("change", onMouseAdded);
        return () => hasMouseQuery.removeEventListener("change", onMouseAdded);
    }, [hideWithoutMouse, containerRef.current]);

    return (
        <div ref={containerRef} className={className ?? ""}>{children}</div>
    );
};

export default MouseTracking;