import React from 'react';

const Technology = ({ name, link, newTab = true }) => {
    return (link ?
        <a
            className="transition-colors duration-200 text-white bg-secondary hover:bg-active hover:active:bg-ligh p-1 rounded-md text-[0.8rem]"
            href={link}
            target={newTab && "_blank"}
        >
            {name}
        </a> :
        <span
            aria-label={name}
            className="text-white bg-secondary p-1 rounded-md text-[0.8rem]"
        >
            {name}
        </span>
    );
};

export default Technology;