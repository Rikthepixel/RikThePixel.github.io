import { QuickSort } from "../../../utils/sort";
import { filterProjects, sortFunctions } from "../logic/Projects";
import { useEffect, useReducer } from "react";

export const types = {
    SET_SORT: "SET_SORT",
    SET_SEARCH: "SET_SEARCH",
    SET_TECHNOLOGIES: "SET_TECHNOLOGIES"
};

const reduceFuntions = {
    [types.SET_SORT]: (state, value) => {
        if (value.value == state.sort.value) { return state; }
        const sortedProjects = QuickSort(state.projects, sortFunctions[value.value]);

        return {
            ...state,
            projects: sortedProjects,
            sort: value
        };
    },

    [types.SET_SEARCH]: (state, value) => {
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

    [types.SET_TECHNOLOGIES]: (state, value) => {
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

const initializer = (allProjects) => {
    const initialAllProjects = QuickSort(allProjects, sortFunctions.DateUp);
    const initialSelectedTechnologies = [];
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

const useProjectsLogic = (allProjects) => {
    const [filter, dispatchFilter] = useReducer((state, { type, value }) => {
        if (!type) return state;
        const reduce = reduceFuntions[type];
        if (!reduce) return state;
        return reduce(state, value);
    }, allProjects, initializer);

    return [filter, dispatchFilter];
};

export default useProjectsLogic;