import React, { useEffect } from 'react';
import Select from "react-select";
import { types } from "logic/projectsLogic";

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

const FilterBar = ({ onChange, state }) => {
    return (
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
                    value={state.search}
                    onChange={e => onChange?.({ type: types.SET_SEARCH, value: e.target.value })}
                />
                <datalist id="SearchList">
                    {state.projectNames.map(proj => <option key={proj} value={proj}>{proj}</option>)}
                </datalist>
            </section>

            <section
                aria-label="Technology"
                className="flex items-center gap-2 w-full flex-wrap children:w-full sm:w-auto md:children:w-auto"
            >
                <label htmlFor="TechnologyFilter">Technologies</label>
                <Select
                    id="TechnologyFilter"
                    instanceId="TechnologyFilterSelect"
                    aria-label="Select box"
                    className="min-h-[2rem]"
                    styles={{ control: () => controlStyle }}
                    onChange={selected => onChange?.({ type: types.SET_TECHNOLOGIES, value: selected })}
                    options={state.filterTechnologies}
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
                    instanceId="SortBySelect"
                    aria-label="Select box"
                    className="min-h-[2rem]"
                    styles={{ control: () => controlStyle }}
                    value={state.sort}
                    onChange={selected => onChange?.({ type: types.SET_SORT, value: selected })}
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
    );
};

export default FilterBar;