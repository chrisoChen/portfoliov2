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
    const archive_response = await fetch(projectsEndpoint);
    const invalid_response = !archive_response.ok;

    if (invalid_response) {
      return [];
    }

    return await archive_response.json();
  } catch (err) {
    return [];
  }
}

function convertProps(sectionData, archiveData) {
  const propData = sectionData.reduce((prev, curr) => {
    return {
      ...prev,
      ...curr,
    };
  }, {});

  propData["archive"].archiveProjects = archiveData;
  return propData;
}

export { getSectionData, getArchiveData, convertProps };
