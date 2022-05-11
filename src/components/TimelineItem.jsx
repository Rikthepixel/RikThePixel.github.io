import React from 'react';

const TimelineItem = ({
    title, company, location, description, startDate, endDate = { custom: "Now" }
}) => {

    const startDateString = startDate.custom ?? `${startDate.year}-${startDate.month}-${startDate.day}`;
    const endDateString = endDate.custom ?? `${endDate.year}-${endDate.month}-${endDate.day}`;

    return (
        <div>
            <div>{title}</div>
            <div>{company}</div>
            {location && <div>{location}</div>}
            <div>{startDateString} → {endDateString}</div>
            <div>{description}</div>
        </div>
    );
};

export default TimelineItem;