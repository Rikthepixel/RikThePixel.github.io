import React from 'react';
import PageHeader from "components/PageHeader";
import ProjectsState from "res/state/Projects";
import useProjectsLogic from "logic/projectsLogic";
import FilterBar from "components/ProjectFilterBar";
import Project from "components/Project";
import Head from 'next/head';

const Projects = () => {
  const [filter, dispatchFilter] = useProjectsLogic(ProjectsState);

  return (
    <>
      <Head>
        <title>Rik den Breejen | Projects</title>
      </Head>
      <PageHeader className="mt-8">
        <p>&lt; Projects /&gt;</p>
      </PageHeader>
      <div className="w-4/5 max-w-7xl children:w-full pb-32 sm:pb-20 flex flex-col items-center gap-6 sm:gap-8">
        <FilterBar
          onChange={dispatchFilter}
          state={filter}
        />
        <section aria-label="Projects" className={`flex flex-col gap-16 ${filter.projects?.length > 0 ? "mb-[20vh]" : ""}`}>
          {filter.projects.map((project, index) => {
            return <Project
              key={`${index}-${project.title}`}
              lazy={index > 2}
              {...project}
            />;
          })}
        </section>
      </div>
    </>
  );
};

export default Projects;