import React from 'react';

const ProjectHeading = ({ startDate, endDate, title }) => {
    return (
        <div className="flex flex-col sm:flex-col-reverse">
            <div aria-label="Start and end date" className="text-gray-600 text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem]">
                {startDate} → {endDate}
            </div>
            <div aria-label="Title" className="text-[1.5rem] sm:text-[2.5rem">{title}</div>
        </div>
    );
};

export default ProjectHeading;