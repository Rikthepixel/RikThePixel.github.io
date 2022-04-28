import React, { useEffect } from 'react';
import PageHeader from "components/PageHeader";

const Projects = () => {
    useEffect(() => {
        document.title = "Rik den Breejen | Projects";
    }, []);

    return (
        <>
            <PageHeader className="pb-0">
                <p>Projects</p>
            </PageHeader>
            <div className="w-2/3 pb-32 sm:pb-20">
                <div>
                    <input placeholder="search by name..." value="" />
                </div>
                <div>

                </div>
            </div>
        </>
    );
};

export default Projects;