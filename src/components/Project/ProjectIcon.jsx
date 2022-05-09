import React from 'react';

const ProjectIcon = ({ icon }) => {
    return (
        <div className="aspect-[4/3] w-auto sm:max-w-[30%]">
            <img
                aria-label="Image"
                className="aspect-[4/3] object-contain sm:object-cover w-full max-h-[60vh] low:max-h-[unset] sm:aspect-auto"
                loading="lazy"
                src={icon}
                alt="Image not found"
            />
        </div>
    );
};

export default ProjectIcon;