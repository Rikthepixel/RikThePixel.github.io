import React from 'react';

const PageHeader = ({ className = "", children }) => {
    return (
        <h1 className={`${className} min-h-[unset] text-[20vmin] flex flex-col items-center justify-center relative pb-32 sm:min-h-screen sm:pb-20`}>
            {children}
        </h1>
    );
};

export default PageHeader;