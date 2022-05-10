import React from 'react';

const ProjectIcon = ({ icon }) => {
    return (
        <div className="flex items-center aspect-[4/3] w-auto sm:max-w-[30%]">
            <img
                aria-label="Image"
                className="p-0 sm:p-4 aspect-[4/3] object-contain sm:object-cover w-full max-h-[60vh] low:max-h-[unset] sm:aspect-auto"
                loading="lazy"
                src={icon}
                alt="Image not found"
            />
        </div>
    );
};

export default ProjectIcon;