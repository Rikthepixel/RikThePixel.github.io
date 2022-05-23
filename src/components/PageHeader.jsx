import React from 'react';

const PageHeader = ({ className = "", children }) => {
    return (
        <h1
            id="page-header"
            className={`${className} font-extralight transition-all duration-500 pb-16 wide:pb-28 text-[3.5rem] sm:text-[6rem] lg:text-[9rem] flex flex-col items-center justify-center text-center`}
        >
            {children}
        </h1>
    );
};

export default PageHeader;