import React from 'react';

const PageHeader = ({ className = "", children }) => {
    return (
        <h1 id="page-header" className={`${className} pb-4 sm:pb-4 mt-auto sm:mt-auto sm:min-h-[unset] min-h-[unset] text-[15vmin] flex flex-col items-center justify-center relative text-center`}>
            {children}
        </h1>
    );
};

export default PageHeader;