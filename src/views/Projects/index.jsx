import React, { useEffect, useReducer } from 'react';
import PageHeader from "components/PageHeader";
import Project from "components/Project";
import ProjectsState from "res/state/Projects";
import Select from "react-select";
import { QuickSort } from "utils/sort";

const sortFunctions = {
    DateUp: (pA, pB) => {
        const { endDate: aEnd, datePriority: aPriority } = pA;
        const { endDate: bEnd, datePriority: bPriority } = pB;
        return (aEnd ? new Date(aEnd.year, (aEnd.month ?? 0) - 1, aEnd.day ?? 1) : new Date(Date.now() - aPriority)) >
            (bEnd ? new Date(bEnd.year, (bEnd.month ?? 0) - 1, bEnd.day ?? 1) : new Date(Date.now() - bPriority));
    },
    DateDown: (pA, pB) => {
        const { endDate: aEnd, datePriority: aPriority } = pA;
        const { endDate: bEnd, datePriority: bPriority } = pB;
        return (aEnd ? new Date(aEnd.year, (aEnd.month ?? 0) - 1, aEnd.day ?? 1) : new Date(Date.now() - aPriority)) <
            (bEnd ? new Date(bEnd.year, (bEnd.month ?? 0) - 1, bEnd.day ?? 1) : new Date(Date.now() - bPriority));
    },
    NameUp: (pA, pB) => pA.title.toLowerCase() < pB.title.toLowerCase(),
    NameDown: (pA, pB) => pA.title.toLowerCase() > pB.title.toLowerCase()
};

const controlStyle = {
    cursor: "default",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: "38px",
    outline: "0",
    backgroundColor: "white",
    position: "relative",
    transition: "all 100ms",
    boxSizing: "border-box",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    borderColor: "rgb(126 34 206);"
};

const initialState = {
    projects: ProjectsState,
    sort: { value: "DateUp", label: "Date ↑" },
    search: "",
    filterTechnologies: [],
    selectedTechnologies: [],
    projectNames: []
};

const filterProjects = (search, selectedTechnologies) => {
    const filteredProjects = [];
    let filteredTechnologies = [];
    let filteredProjectNames = [];

    ProjectsState.forEach((project) => {
        const { title, technologies } = project;

        if (!title.toLowerCase().includes(search?.toLowerCase?.()) && search !== "") {
            return;
        }
        if (!selectedTechnologies.every(filterTech => technologies.find(tech => filterTech.value === tech.name))) {
            return;
        }

        filteredProjects.push(project);
        filteredTechnologies = filteredTechnologies.concat(technologies.map(t => t.name));
        filteredProjectNames.push(title);
    });

    filteredTechnologies = [...new Set(filteredTechnologies)].map(t => ({ value: t, label: t }));
    return [filteredProjects, filteredTechnologies, filteredProjectNames];
};

const Projects = () => {
    const [filter, dispatchFilter] = useReducer((state, { type, value }) => {
        switch (type) {
            case "SetSort": {
                if (value.value == state.sort.value) { return state; }
                const sortedProjects = QuickSort(state.projects, sortFunctions[value.value]);
                return {
                    ...state,
                    projects: sortedProjects,
                    sort: value
                };
            }

            case "SetSearch": {
                const [filteredProjects, filteredTechnologies, filteredProjectNames] = filterProjects(value, state.selectedTechnologies);
                return {
                    ...state,
                    search: value,
                    projects: filteredProjects,
                    filterTechnologies: filteredTechnologies,
                    projectNames: filteredProjectNames
                };
            }


            case "SetTechnologies": {
                const [filteredProjects, filteredTechnologies, filteredProjectNames] = filterProjects(state.search, value);
                return {
                    ...state,
                    projects: filteredProjects,
                    selectedTechnologies: value,
                    filterTechnologies: filteredTechnologies,
                    projectNames: filteredProjectNames
                };
            }

            case "Refresh": {
                const [filteredProjects, filteredTechnologies, filteredProjectNames] = filterProjects(state.search, state.selectedTechnologies);
                return {
                    ...state,
                    projects: filteredProjects,
                    filterTechnologies: filteredTechnologies,
                    projectNames: filteredProjectNames
                };
            }

            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        document.title = "Rik den Breejen | Projects";
        dispatchFilter({ type: "Refresh" });
    }, []);

    return (
        <>
            <PageHeader className="pb-4">
                <p>Projects</p>
                <p className="text-base"></p>
            </PageHeader>
            <div className="w-4/5 children:w-full pb-32 sm:pb-20 flex flex-col items-center gap-4">
                <section aria-label="Project filters" className="flex gap-4 flex-wrap">
                    <section
                        aria-label="Search by title"
                        className="flex items-center gap-2 w-full flex-wrap children:w-full sm:w-auto md:children:w-auto"
                    >
                        <label htmlFor="SearchByNameFilter">Search</label>
                        <input
                            className="min-h-[38px] border-purple-700 border-[1px]"
                            id="SearchByNameFilter"
                            list="SearchList"
                            placeholder="Search by name..."
                            value={filter.search}
                            onChange={e => dispatchFilter({ type: "SetSearch", value: e.target.value })}
                        />
                        <datalist id="SearchList">
                            {filter.projectNames.map(proj => <option key={proj} value={proj}>{proj}</option>)}
                        </datalist>
                    </section>

                    <section
                        aria-label="Technology"
                        className="flex items-center gap-2 w-full flex-wrap children:w-full sm:w-auto md:children:w-auto"
                    >
                        <label htmlFor="TechnologyFilter">Technologies</label>
                        <Select
                            id="TechnologyFilter"
                            aria-label="Select box"
                            className="min-h-[2rem]"
                            styles={{ control: () => controlStyle }}
                            onChange={selected => dispatchFilter({ type: "SetTechnologies", value: selected })}
                            options={filter.filterTechnologies}
                            isMulti
                        />
                    </section>

                    <section
                        aria-label="Sort by"
                        className="flex items-center gap-2 w-full flex-wrap children:w-full sm:w-auto md:children:w-auto"
                    >
                        <label htmlFor="SortBy">Sort by</label>
                        <Select
                            id="SortBy"
                            aria-label="Select box"
                            className="min-h-[2rem]"
                            styles={{ control: () => controlStyle }}
                            value={filter.sort}
                            onChange={selected => dispatchFilter({ type: "SetSort", value: selected })}
                            options={[
                                { value: "DateUp", label: "Date ↑" },
                                { value: "DateDown", label: "Date ↓" },
                                { value: "NameUp", label: "Name ABC" },
                                { value: "NameDown", label: "Name CBA" }
                            ]}
                            isSearchable="false"
                        />
                    </section>
                </section>
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