import React from 'react';

const TimelineItem = ({
    title, company, location, description, startDate, endDate = { custom: "Now" }
}) => {

    const startDateString = startDate.custom ?? `${startDate.year}-${startDate.month}-${startDate.day}`;
    const endDateString = endDate.custom ?? `${endDate.year}-${endDate.month}-${endDate.day}`;

    return (
        <div className="flex justify-center odd:flex-row-reverse">
            <div className="w-full min-h-[0.25rem] flex after:block after:bg-black after:h-full after:w-1/2"></div>
            <div className="flex flex-col items-center text-center w-full">
                <div className="w-fit mx-2">
                    <div>{title}</div>
                    <div>{company}</div>
                    {location && <div>{location}</div>}
                    <div>{startDateString} → {endDateString}</div>
                    <div>{description}</div>
                </div>
            </div>
            <div className="h-auto min-w-[0.25rem] bg-black"></div>
            <div className="w-full"></div>
        </div>
    );
};

export default TimelineItem;