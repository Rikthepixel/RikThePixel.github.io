const sortDataUp = (pA, pB) => {
    const endA = pA.endDate;
    const endB = pB.endDate;
    const dateA = endA ? new Date(endA.year, (endA.month ?? 0) - 1, endA.day ?? 1) : new Date(Date.now() - pA.datePriority);
    const dateB = endB ? new Date(endB.year, (endB.month ?? 0) - 1, endB.day ?? 1) : new Date(Date.now() - pB.datePriority);

    return dateA > dateB;
};
const sortNameUp = (pA, pB) => pA.title.toLowerCase() < pB.title.toLowerCase();

export const sortFunctions = {
    DateUp: sortDataUp,
    DateDown: (pA, pB) => !sortDataUp(pA, pB),
    NameUp: sortNameUp,
    NameDown: (pA, pB) => !sortNameUp(pA, pB)
};

export const filterProjects = (allProjects, search, selectedTechnologies) => {
    const filteredProjects = [];
    let filteredTechnologies = [];
    let filteredProjectNames = [];

    allProjects.forEach((project) => {
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