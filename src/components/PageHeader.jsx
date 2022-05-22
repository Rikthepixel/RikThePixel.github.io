import React from 'react';

const PageHeader = ({ className = "", children }) => {
    return (
        <h1
            id="page-header"
            className={`${className} font-extralight pb-4 sm:pb-4 sm:min-h-[unset] min-h-[unset] text-[3.5rem] sm:text-[7rem] md:text-[9rem] flex flex-col items-center justify-center relative text-center`}
        >
            {children}
        </h1>
    );
};

export default PageHeader;