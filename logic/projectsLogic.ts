import { QuickSort } from "utils/sort";
import { Reducer, useReducer } from "react";
import type { Project } from 'res/state/Projects';

type ProjSortFunc = (pA: Project, pB: Project) => boolean;

const sortDataUp: ProjSortFunc = (pA: Project, pB: Project) => {
    const endA = pA.endDate;
    const endB = pB.endDate;
    const dateA = endA ? new Date(endA.year, (endA.month ?? 0) - 1, endA.day ?? 1) : new Date(Date.now() - pA.datePriority);
    const dateB = endB ? new Date(endB.year, (endB.month ?? 0) - 1, endB.day ?? 1) : new Date(Date.now() - pB.datePriority);

    return dateA > dateB;
};
const sortNameUp: ProjSortFunc = (pA: Project, pB: Project) => pA.title.toLowerCase() < pB.title.toLowerCase();

export const sortFunctions = {
    DateUp: sortDataUp,
    DateDown: (pA: Project, pB: Project) => !sortDataUp(pA, pB),
    NameUp: sortNameUp,
    NameDown: (pA: Project, pB: Project) => !sortNameUp(pA, pB)
};

export const filterProjects = (allProjects: Project[], search: string, selectedTechnologies: { value: string; }[]) => {
    const filteredProjects: Project[] = [];
    let filteredTechnologyNames: string[] = [];
    let filteredProjectNames: string[] = [];

    allProjects.forEach((project) => {
        const { title, technologies } = project;

        if (!title.toLowerCase().includes(search?.toLowerCase?.()) && search !== "") {
            return;
        }
        if (!selectedTechnologies.every(filterTech => technologies.find(tech => filterTech.value === tech.name))) {
            return;
        }

        filteredProjects.push(project);
        filteredTechnologyNames = filteredTechnologyNames.concat(technologies.map(t => t.name));
        filteredProjectNames.push(title);
    });

    const filteredTechnologies = [...new Set(filteredTechnologyNames)].map(t => ({ value: t, label: t }));
    return [filteredProjects, filteredTechnologies, filteredProjectNames] as const;
};


export const types = {
    SET_SORT: "SET_SORT",
    SET_SEARCH: "SET_SEARCH",
    SET_TECHNOLOGIES: "SET_TECHNOLOGIES"
};

interface ProjectLogicState {
    allProjects: Project[],
    projects: Project[],
    sort: { value: string; label: string; },
    search: string,
    filterTechnologies: { value: string, label: string; }[],
    selectedTechnologies: { value: string, label: string; }[],
    projectNames: string[];
}

const reduceFuntions = {
    [types.SET_SORT]: (state: ProjectLogicState, value: { value: keyof typeof sortFunctions; label: string; }): ProjectLogicState => {
        if (value.value == state.sort.value) { return state; }
        const sortedProjects = QuickSort(state.projects, sortFunctions[value.value]);

        return {
            ...state,
            projects: sortedProjects,
            sort: value
        };
    },

    [types.SET_SEARCH]: (state: ProjectLogicState, value: string): ProjectLogicState => {
        const [filteredProjects, filteredTechnologies, filteredProjectNames] = filterProjects(
            state.allProjects,
            value,
            state.selectedTechnologies
        );

        return {
            ...state,
            search: value,
            projects: filteredProjects,
            filterTechnologies: filteredTechnologies,
            projectNames: filteredProjectNames
        };
    },

    [types.SET_TECHNOLOGIES]: (state: ProjectLogicState, value: { value: string; label: string; }[]): ProjectLogicState => {
        const [filteredProjects, filteredTechnologies, filteredProjectNames] = filterProjects(
            state.allProjects,
            state.search,
            value
        );

        return {
            ...state,
            projects: filteredProjects,
            selectedTechnologies: value,
            filterTechnologies: filteredTechnologies,
            projectNames: filteredProjectNames
        };
    }
};

const initializer = (allProjects: Project[]) => {
    const initialAllProjects = QuickSort(allProjects, sortFunctions.DateUp);
    const initialSelectedTechnologies: { value: string, label: string; }[] = [];
    const initialSearchValue = "";
    const initialSort = { value: "DateUp", label: "Date ↑" };

    const [, filteredTechnologies, filteredProjectNames] = filterProjects(
        initialAllProjects,
        initialSearchValue,
        initialSelectedTechnologies
    );

    return {
        allProjects: initialAllProjects,
        projects: initialAllProjects,
        sort: initialSort,
        search: initialSearchValue,
        filterTechnologies: filteredTechnologies,
        selectedTechnologies: initialSelectedTechnologies,
        projectNames: filteredProjectNames
    };
};

const useProjectsLogic = (allProjects: Project[]) => {
    const [filter, dispatchFilter] = useReducer<Reducer<ProjectLogicState, any>, Project[]>((state, { type, value }) => {
        if (!type) return state;
        const reduce = reduceFuntions[type];
        if (!reduce) return state;
        return reduce(state, value);
    }, allProjects, initializer);

    return [filter, dispatchFilter] as const;
};

export default useProjectsLogic;