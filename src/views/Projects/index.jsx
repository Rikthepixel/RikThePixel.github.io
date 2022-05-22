import React, { useEffect, useReducer } from 'react';
import PageHeader from "components/PageHeader";
import Project from "components/Project";
import { ProjectsReducer, initialState } from "./ProjectsLogic";
import FilterBar from "./FilterBar";

const Projects = () => {
    const [filter, dispatchFilter] = useReducer(ProjectsReducer, initialState);

    useEffect(() => {
        document.title = "Rik den Breejen | Projects";
        dispatchFilter({ type: "Refresh" });
    }, []);

    return (
        <>
            <PageHeader className="mt-8">
                <p>{`< Projects />`}</p>
            </PageHeader>
            <div className="w-4/5 children:w-full pb-32 sm:pb-20 flex flex-col items-center gap-4">
                <FilterBar
                    onChange={dispatchFilter}
                    state={filter}
                />
                <section aria-label="Projects" className="flex flex-col gap-8">
                    {filter.projects.map((project, index) => {
                        return <Project key={`${index}-${project.title}`} {...project} />;
                    })}
                </section>
            </div>
        </>
    );
};

export default Projects;