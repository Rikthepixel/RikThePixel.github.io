import React from 'react';
import Link from "components/Link";
import Technology from "../Technology";
import "./Project.scss";

const Project = ({ title, text, icon, technologies, startDate, endDate = { custom: "Now" }, link, linkLabel = "Go to" }) => {

    const startDateString = startDate.custom ?? `${startDate.year}-${startDate.month}`;
    const endDateString = endDate.custom ?? `${endDate.year}-${endDate.month}`;

    return (
        <article aria-label={`Project: ${title}`} className="bg-white bg-opacity-30 flex justify-center flex-wrap gap-4 overflow-hidden shadow-md rounded-md even:flex-row-reverse sm:justify-start sm:flex-nowrap">
            {icon && <div className="aspect-[4/3] w-auto sm:max-w-[30%]">
                <img
                    aria-label="Image"
                    className="aspect-[4/3] object-contain sm:object-cover w-full max-h-[60vh] low:max-h-[unset] sm:aspect-auto"
                    loading="lazy"
                    src={icon}
                    alt="Image not found"
                />
            </div>}
            <div className="flex flex-col justify-between w-full transition-all duration-500 p-2 gap-2 sm:gap-3 sm:py-2 sm:p-1 md:p-2 lg:p-4">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-col-reverse">
                        <div aria-label="Start and end date" className="text-gray-600 text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem]">{startDateString} → {endDateString}</div>
                        <div aria-label="Title" className="text-[1.5rem] sm:text-[2.5rem">{title}</div>
                    </div>
                    <section aria-label="Description" className="project-description">{text}</section>
                </div>
                {(link ?? (technologies && technologies?.length > 0)) && <div className="flex flex-col transition-all duration-500 gap-1 sm:gap-2">
                    {link && <Link aria-label="External link" className="w-full sm:w-fit" href={link}>
                        {linkLabel}
                    </Link>}
                    {(technologies && technologies?.length > 0) && <section aria-label="Technologies" className="flex flex-wrap gap-2">
                        {technologies.map(tech => <Technology name={tech.name} link={tech.link} />)}
                    </section>}

                </div>}
            </div>
        </article >
    );
};

export default Project;