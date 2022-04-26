import React, { useEffect } from 'react';
import PageHeader from "components/PageHeader";

const Projects = () => {
    useEffect(() => {
        document.title = "Rik den Breejen | Projects";
    }, []);

    return (
        <>
            <PageHeader>
                <p>Projects</p>
            </PageHeader>
        </>
    );
};

export default Projects;