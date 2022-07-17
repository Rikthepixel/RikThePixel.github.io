import React from 'react';
import Link from "components/Link";

const ProjectLinks = ({ links }) => {
    return (
        <section aria-label="External links" className="flex flex-wrap gap-2 children:w-full sm:children:w-fit">
            {links.map(link =>
                <Link key={link.name} href={link.link}>{link.name}</Link>
            )}
        </section>
    );
};

export default ProjectLinks;