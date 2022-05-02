import React, { useEffect, useReducer } from 'react';
import PageHeader from "components/PageHeader";
import Project from "components/Project";
import ProjectsState from "res/state/Projects";
import Select from "react-select";
import { QuickSort } from "utils/sort";

const sortFunctions = {
    "DateUp": (pA, pB) => {
        const { endDate: aEnd, datePriority: aPriority } = pA;
        const { endDate: bEnd, datePriority: bPriority } = pB;
        return (aEnd ? new Date(aEnd.year, (aEnd.month ?? 0) - 1, aEnd.day ?? 0) : aPriority ?? new Date(Date.now())) <
            (bEnd ? new Date(bEnd.year, (bEnd.month ?? 0) - 1, bEnd.day ?? 0) : bPriority ?? new Date(Date.now()));
    },
    "DateDown": (pA, pB) => {
        const { endDate: aEnd, datePriority: aPriority } = pA;
        const { endDate: bEnd, datePriority: bPriority } = pB;
        return (aEnd ? new Date(aEnd.year, (aEnd.month ?? 0) - 1, aEnd.day ?? 0) : aPriority ?? new Date(Date.now())) >
            (bEnd ? new Date(bEnd.year, (bEnd.month ?? 0) - 1, bEnd.day ?? 0) : bPriority ?? new Date(Date.now()));
    },
    "NameUp": (pA, pB) => pA.title.toLowerCase() < pB.title.toLowerCase(),
    "NameDown": (pA, pB) => pA.title.toLowerCase() >= pB.title.toLowerCase()
};

const initialState = {
    projects: QuickSort(ProjectsState, sortFunctions.DateUp),
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

        console.log(title.toLowerCase(), search?.toLowerCase?.(), (!title.toLowerCase().includes(search?.toLowerCase?.()) && search !== ""));
        if (!title.toLowerCase().includes(search?.toLowerCase?.()) && search !== "") {
            console.log(project, "title");
            return;
        }

        if (!selectedTechnologies.every(filterTech => {
            console.log(filterTech);
            return technologies.find(tech => filterTech.value === tech.name);
        })) {
            console.log(project, "tech");
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
                    technologies: filteredTechnologies,
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
                    technologies: filteredTechnologies,
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
                <div className="flex gap-4 flex-wrap children:flex children:items-center children:gap-2 children:w-full children:sm:w-auto sm:flex-nowrap">
                    <div>
                        <label htmlFor="SearchByNameFilter">Search:</label>
                        <input
                            className="min-h-[2rem]"
                            id="SearchByNameFilter"
                            placeholder="search by name..."
                            value={filter.search}
                            onChange={e => dispatchFilter({ type: "SetSearch", value: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="TechnologyFilter">Technologies:</label>
                        <Select
                            id="TechnologyFilter"
                            className="min-h-[2rem]"
                            onChange={selected => dispatchFilter({ type: "SetTechnologies", value: selected })}
                            options={filter.filterTechnologies}
                            isMulti
                        />
                    </div>

                    <div>
                        <label htmlFor="SortBy">Sort by:</label>
                        <Select
                            id="SortBy"
                            className="min-h-[2rem]"
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
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    {filter.projects.map((project, index) => {
                        return <Project key={`${index}-${project.title}`} {...project} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;