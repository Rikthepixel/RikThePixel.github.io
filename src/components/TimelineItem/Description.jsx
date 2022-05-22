import React from 'react';

const Description = ({
    title, text, company, companyLink, location, periodName, dateString
}) => {
    return (
        <div className="w-full mx-2 px-2 pb-8 description">
            <div className="text-[1.3rem] font-bold">{title}</div>
            <div className="text-[1.1rem] font-bold flex flex-wrap items-center justify-center gap-2">
                {companyLink ?
                    <a href={companyLink} target="_blank">{company}</a> :
                    <div>{company}</div>
                }
                -
                {location && <div>{location}</div>}
            </div>
            <div className="text-grayed text-[0.9rem] flex flex-wrap items-center justify-center gap-2">
                {periodName && <span className="font-bold">{periodName}:</span>}
                <span>{dateString}</span>
            </div>
            <div>{text}</div>
        </div>
    );
};

export default Description;