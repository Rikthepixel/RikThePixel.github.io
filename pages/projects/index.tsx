import Head from "next/head";
import React from "react";

interface ProjectsProps {

}

const Projects = ({ }: ProjectsProps) => {

    return (
        <>
            <Head>
                <title>Rik den Breejen | Projects</title>
            </Head>
            <div>
                <aside aria-label="Filters and Storing">
                    <input className="border-2 border-primary-900 outline-primary-contrast/25 bg-transparent rounded-md transition-all px-4 py-2 focus-visible:outline " />
                </aside>
                <div>

                </div>
                <div aria-label="Counter balance" aria-hidden>

                </div>
            </div>
        </>
    );
};

export default Projects;