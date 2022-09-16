function filterProjects(projects, banList) {
  const filtered_projects = projects.filter((project) => {
    console.log(project.name);
    console.log(banList);
    const nonBanItem = !banList.includes(project.name);
    return nonBanItem;
  });

  return filtered_projects;
}

export { filterProjects };
