import React from 'react';
import { HorizontalArrow, VerticalArrow } from "./Arrows";
import Description from "./Description";

const TimelineItem = ({
    title, company, companyLink, location, description, startDate, endDate = { custom: "Now" }, periodName, onLeft
}) => {

    const startDateString = startDate.custom ?? `${startDate.year}-${startDate.month}-${startDate.day}`;
    const endDateString = endDate.custom ?? `${endDate.year}-${endDate.month}-${endDate.day}`;

    return (
        <div className={`flex justify-center flex-row-reverse ${onLeft ? "" : "sm:flex-row"}`}>
            <div className="flex flex-col items-center text-center w-full">
                <HorizontalArrow onLeft={onLeft} />
                <Description
                    title={title}
                    company={company}
                    companyLink={companyLink}
                    periodName={periodName}
                    dateString={`${startDateString} → ${endDateString}`}
                    location={location}
                    text={description}
                />
            </div>
            <VerticalArrow />
            <div className={`w-1/4 sm:w-full flex justify-end ${onLeft ? "" : "sm:justify-start"}`}>
                <div className={`text-grayed h-fit -translate-y-1/2 pr-2 ${onLeft ? "" : "sm:pl-2"}`}>{startDate.year}-{startDate.month}</div>
            </div>
        </div>
    );
};

export default TimelineItem;;