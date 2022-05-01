import React, { useEffect } from 'react';
import PageHeader from "components/PageHeader";
import Project from "components/Project";
import ProjectsState from "res/state/Projects";

const Projects = () => {
    useEffect(() => {
        document.title = "Rik den Breejen | Projects";
    }, []);

    return (
        <>
            <PageHeader className="pb-4">
                <p>Projects</p>
                <p className="text-base"></p>
            </PageHeader>
            <div className="w-4/5 children:w-full pb-32 sm:pb-20 flex flex-col items-center gap-4">
                <div className="children:h-8 flex gap-4 flex-wrap children:w-full children:sm:w-auto sm:flex-nowrap">
                    <input placeholder="search by name..." value="" />

                    <select>
                        <option value="DateUp" >Date ↑</option>
                        <option value="DateDown" >Date ↓</option>
                        <option value="NameUp">Name ↑</option>
                        <option value="NameDown">Name ↓</option>
                    </select>
                </div>
                <div className="flex flex-col gap-8">
                    {ProjectsState.map((project, index) => {
                        return <Project key={index} {...project} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;