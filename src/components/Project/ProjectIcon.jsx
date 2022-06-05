import React from 'react';
import { QuickSort } from "../../utils/sort";

const generateImageData = (icon) => {
    const isIconSet = Array.isArray(icon);
    if (!isIconSet) return [icon, ""];

    const iconSet = QuickSort(icon, (a, b) => a.width <= b.width);
    const smallestImage = iconSet[0];
    const srcSetString = iconSet.map((img) => `${img.src} ${img.width}w`).join(", ");

    return [smallestImage, srcSetString];
};

const ProjectIcon = ({ icon, iconAlt = "Image not found", lazy }) => {

    const [displayImage, srcSetString] = generateImageData(icon);

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