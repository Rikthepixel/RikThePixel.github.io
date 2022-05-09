import React from 'react';
import Technology from "./Technology";

const ProjectTechnologies = ({ technologies }) => {
    return (
        <section aria-label="Technologies" className="w-full flex flex-wrap gap-2">
            {technologies.map(tech =>
                <Technology key={tech.name} name={tech.name} link={tech.link} />
            )}
        </section>
    );
};

export default ProjectTechnologies;