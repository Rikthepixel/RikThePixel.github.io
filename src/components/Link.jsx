import React from 'react';

const Link = ({ className = "", href, children = [], ...props }) => (
    <a {...props} className={`transition-colors duration-200 ${className} w-fit text-white bg-purple-700 hover:bg-purple-500 rounded-md p-1 inline-block`} href={href}>
        {children}
    </a>);

export default Link;