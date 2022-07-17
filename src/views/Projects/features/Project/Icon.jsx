import React from 'react';
import { generateSrcSet } from "utils/imageSets";

const ProjectIcon = ({ icon, iconAlt = "Image not found", lazy }) => {

    const [srcSetString, displayImage] = generateSrcSet(icon);

    return (
        <div className="flex items-center aspect-[4/3] w-auto lg:max-w-[30%]">
            <img
                aria-label="Image"
                width={displayImage.width}
                height={displayImage.height}
                className="p-0 sm:p-4 aspect-[4/3] object-contain sm:object-cover w-full max-h-[60vh] low:max-h-[unset]  sm:aspect-auto"
                loading={lazy ? "lazy" : "eager"}
                src={displayImage.src}
                srcSet={srcSetString}
                alt={iconAlt}
            />
        </div>
    );
};

export default ProjectIcon;