import {
  getArchiveData,
  getSectionData,
  convertProps,
} from "../util/getData.js";
import { filterProjects } from "../util/getData.js";
import endpoints from "../util/endpoints";

let archiveData, sectionData, propData;
beforeAll(async () => {
  sectionData = await getSectionData(endpoints);
  archiveData = await getArchiveData(process.env.GITHUB_REPO_API);
  propData = convertProps(sectionData, archiveData);
});

describe("Project data from my Github", () => {
  test("doesn't include my first banList item", () => {
    const { banList = [], projectList = [] } = propData.archive;
    const filteredProjects = filterProjects(projectList, banList);

    const results = filteredProjects.find(
      (element) => element.name === banList[0]
    );

    expect(results).toBeUndefined();
  });
});
