import fsPromises from "fs/promises";
import path from "path";

function getSectionData(endpoints) {
  const sectionData = Object.values(endpoints).map(async (endpoint) => {
    const filepath = path.join(process.cwd(), endpoint);
    const jsonData = await fsPromises.readFile(filepath);

    return JSON.parse(jsonData);
  });

  return Promise.all(sectionData);
}

async function getArchiveData(projectsEndpoint) {
  try {
    const headers = new Headers();
    headers.append(
      "Authorization",
      `Bearer ${process.env.GITHUB_REPO_AUTH_TOKEN}`
    );

    const archive_response = await fetch(projectsEndpoint, {
      headers: headers,
    });

    const invalid_response = !archive_response.ok;
    if (invalid_response) {
      return [];
    }

    return await archive_response.json();
  } catch (err) {
    return [];
  }
}

function convertProps(sectionData, projectData) {
  const propData = sectionData.reduce((prev, curr) => {
    return {
      ...prev,
      ...curr,
    };
  }, {});

  propData["archive"].projectList = projectData;
  return propData;
}

function filterProjects(projects, banList) {
  const filtered_projects = projects.filter((project) => {
    const nonBanItem = !banList.includes(project.name);
    return nonBanItem;
  });

  return filtered_projects;
}

export { getSectionData, getArchiveData, convertProps, filterProjects };
