import React from 'react';

const PageHeader = ({ className = "", children }) => {
    return (
        <h1 className={`${className} text-[20vmin] min-h-screen flex flex-col items-center justify-center relative drop-shadow-sm shadow-black`}>
            {children}
        </h1>
    );
};

export default PageHeader;