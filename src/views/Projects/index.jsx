import React, { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        document.title = "Rik den Breejen | Projects";
    }, []);

    return (
        <main className="p-4 flex-1">
            Projects
        </main>
    );
};

export default Projects;