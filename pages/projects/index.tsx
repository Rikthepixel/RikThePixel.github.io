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
            <div className="grid grid-cols-[300px_1fr] w-full max-w-7xl mx-auto">
                <aside className="border-r border-neutral-600/50 p-4" aria-label="Filters and Storing">
                    <div className="w-full border-2 border-primary-900 rounded-md">
                        <label htmlFor=""></label>
                        <input
                            className="w-full bg-transparent rounded-md outline-offset-2 px-4 py-2"
                        />
                    </div>
                </aside>
                <div className="p-4">

                </div>
            </div>
        </>
    );
};

export default Projects;