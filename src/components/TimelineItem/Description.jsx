import React from 'react';

const Description = ({
    title, text, company, companyLink, location, periodName, dateString
}) => {
    return (
        <div className="w-full mx-2 px-2 pt-4 pb-16 sm:pb-32 description">
            <div className="text-[1.3rem] font-bold">{title}</div>
            <div className="text-[1.05rem] sm:text-[1.1rem] font-bold flex flex-col flex-wrap justify-center md:gap-2 md:flex-row">
                {companyLink ?
                    <a href={companyLink} target="_blank">{company}</a> :
                    <div>{company}</div>
                }
                <span className="hidden md:block">in</span>
                {location && <div>{location}</div>}
            </div>
            <div className="text-grayed text-[0.9rem] flex flex-wrap items-center justify-center flex-col sm:flex-row sm:gap-2">
                {periodName && <span className="font-bold">{periodName}:</span>}
                <span>{dateString}</span>
            </div>
            {text && <div className="mt-2 text-left text-[0.9rem] sm:text-[1rem]">{text}</div>}
        </div>
    );
};

export default Description;