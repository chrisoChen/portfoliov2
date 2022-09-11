import {
  getArchiveData,
  getSectionData,
  convertProps,
} from "../util/getData.js";
import endpoints from "../util/endpoints";

let archiveData, sectionData, propData;
beforeAll(async () => {
  sectionData = await getSectionData(endpoints);
  archiveData = await getArchiveData(process.env.GITHUB_REPO_API);
  propData = convertProps(sectionData, archiveData);
});

describe("project data retrieved from my Github Url", () => {
  test("can be cleaned from my banList", () => {
    // console.log(archiveData);
    // console.log(sectionData);
    console.log(propData);
  });
});
