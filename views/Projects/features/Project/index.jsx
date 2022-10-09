import React from 'react';
import Links from "./Links";
import Technologies from "./Technologies";
import Icon from "./Icon";
import Heading from "./Heading";

const Project = ({
    title, text, icon, iconAlt, startDate, endDate = { custom: "Now" }, links, technologies, lazy
}) => {

    const startDateString = startDate.custom ?? `${startDate.year}-${startDate.month}-${startDate.day}`;
    const endDateString = endDate.custom ?? `${endDate.year}-${endDate.month}-${endDate.day}`;

    const renderedLinks = links?.length > 0 && <Links links={links} />;
    const renderedTechnologies = technologies?.length > 0 && <Technologies technologies={technologies} />;

    return (
        <article aria-label={`Project: ${title}`} className="bg-white bg-opacity-30 flex justify-center flex-wrap gap-4 overflow-hidden shadow-md rounded-md even:flex-row-reverse sm:justify-start sm:flex-nowrap">
            {icon && <Icon icon={icon} iconAlt={iconAlt} lazy={lazy} />}
            <div className="flex flex-col justify-between w-full transition-all duration-500 p-2 gap-6 sm:gap-4 sm:py-2 sm:p-1 md:p-2 lg:p-4">
                <div className="flex flex-col gap-2 sm:gap-4">
                    <Heading
                        startDate={startDateString}
                        endDate={endDateString}
                        title={title}
                    />
                    <section
                        aria-label="Description"
                        className="description"
                    >
                        {text}
                    </section>
                </div>
                {(renderedLinks || renderedTechnologies) && <div className="flex flex-col transition-all duration-500 gap-8 sm:gap-4">
                    {renderedLinks}
                    {renderedTechnologies}
                </div>}
            </div>
        </article>
    );
};

export default Project;