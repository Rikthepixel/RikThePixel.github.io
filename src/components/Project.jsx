import React from 'react';
import Link from "components/Link";
import placeholder from "res/images/Placeholder.webp";

const Project = ({ title, text, icon, startDate, endDate = { custom: "Now" }, link, linkLabel = "Go to" }) => {

    const startDateString = startDate.custom ?? `${startDate.year}-${startDate.month}`;
    const endDateString = endDate.custom ?? `${endDate.year}-${endDate.month}`;

    return (
        <div className="bg-white bg-opacity-30 flex justify-center flex-wrap gap-4 overflow-hidden shadow-md rounded-md even:flex-row-reverse sm:justify-start sm:flex-nowrap">
            <div className="aspect-[4/3] w-auto sm:max-w-[25%]">
                <img
                    className="aspect-[4/3] object-cover w-full"
                    src={icon || placeholder}
                    alt="Image not found"
                />
            </div>
            <div className="flex flex-col justify-between w-full transition-all duration-500 p-2 sm:gap-2 sm:py-2 sm:p-1 md:p-2 lg:p-4">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-col-reverse">
                        <div className="text-gray-600 text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem]">{startDateString} → {endDateString}</div>
                        <div className="text-[2rem] sm:text-[2.5rem">{title}</div>
                    </div>
                    <div>{text}</div>
                </div>
                {link && <Link href={link}>
                    {linkLabel}
                </Link>}
            </div>
        </div>
    );
};

export default Project;