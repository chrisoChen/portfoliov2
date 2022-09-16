function filterProjects(projects, banList) {
  const filtered_projects = projects.filter((project) => {
    const nonBanItem = !banList.includes(project.name);
    return nonBanItem;
  });

  return filtered_projects;
}

export { filterProjects };
