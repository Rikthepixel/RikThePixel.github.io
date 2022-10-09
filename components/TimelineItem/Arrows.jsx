import React from 'react';

export const HorizontalArrow = ({ onLeft }) =>
    <div
        className={`w-full min-h-[0.25rem] flex justify-start ${onLeft ? "" : "sm:justify-end"}`}
    >
        <div className={`bg-black h-full w-1/2 relative flex items-center justify-end ${onLeft ? "" : "sm:justify-start"}`}>
            <div className={`absolute rounded-full bg-black aspect-square h-[250%] translate-x-1/2 ${onLeft ? "" : "sm:-translate-x-1/2"}`}></div>
        </div>
    </div>;

export const VerticalArrow = () => <div className="h-auto min-w-[0.25rem] bg-black"></div>;