import React from 'react';

const Link = ({ className = "", href, children = [], ...props }) => (
    <a {...props} className={`transition-colors duration-200 ${className} w-fit text-white bg-purple-700 hover:bg-purple-500 rounded-md px-[1.5ch] py-[0.5ch] inline-block`} href={href}>
        {children}
    </a>);

export default Link;