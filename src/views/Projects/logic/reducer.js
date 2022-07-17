import { QuickSort } from "../../../utils/sort";
import { filterProjects, sortFunctions } from "../../../logic/Projects";
import ProjectsState from "../../../res/state/Projects";

export const initialState = {
    projects: ProjectsState,
    sort: { value: "DateUp", label: "Date ↑" },
    search: "",
    filterTechnologies: [],
    selectedTechnologies: [],
    projectNames: []
};

export const ProjectsReducer = (state, { type, value }) => {
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
            const [filteredProjects, filteredTechnologies, filteredProjectNames] = filterProjects(ProjectsState, value, state.selectedTechnologies);
            return {
                ...state,
                search: value,
                projects: filteredProjects,
                filterTechnologies: filteredTechnologies,
                projectNames: filteredProjectNames
            };
        }


        case "SetTechnologies": {
            const [filteredProjects, filteredTechnologies, filteredProjectNames] = filterProjects(ProjectsState, state.search, value);
            return {
                ...state,
                projects: filteredProjects,
                selectedTechnologies: value,
                filterTechnologies: filteredTechnologies,
                projectNames: filteredProjectNames
            };
        }

        default:
            return state;
    }
};