import InlineLink from "components/navigation/InlineLink";

import IExperience from "models/IExperience";

export interface ExperienceProps extends IExperience {
    showDivider?: boolean;
}

const Experience = ({ title, position, logo, place, timespan, showDivider }: ExperienceProps) => {
    return (
        <>
            <article className="flex flex-row items-center gap-4">
                <img
                    className="w-20 aspect-square rounded-lg sm:w-28"
                    alt={`${place.name} logo`}
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                />
                <div className="flex flex-col gap-1 w-full sm:gap-2">
                    <header className="flex items-center row-span-2 text-xl font-bold sm:text-3xl">
                        {title}
                    </header>
                    <div className="flex flex-col gap-1 sm:gap-2">
                        <div className="flex flex-col gap-1 sm:items-center sm:flex-row sm:gap-4">
                            <InlineLink
                                className="underline"
                                href={place.link}
                            >
                                {place.name}
                            </InlineLink>
                            <div className="hidden bg-white w-1 h-1 rounded-full sm:block" aria-hidden></div>
                            <div>{position}</div>
                        </div>
                        <div className="flex gap-1 sm:gap-2" aria-label="timespan">
                            <span>{timespan.start}</span>
                            <span>-</span>
                            <span>{timespan.end}</span>
                        </div>
                    </div>
                </div>
            </article>
            {(showDivider) && <div className="w-full h-[1px] bg-neutral-600 rounded-full opacity-50" aria-hidden></div>}
        </>
    );
};

export default Experience;