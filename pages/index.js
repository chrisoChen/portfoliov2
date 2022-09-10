import { ScrollProvider } from "../context/ScrollContext";
import { SectionDataProvider } from "../context/SectionDataContext";
import fsPromises from "fs/promises";
import path from "path";
import endpoints from "../util/endpoints";

function Main(props) {
  const { sections = [] } = props;
  return (
    <>
      <SectionDataProvider data={props}>
        <ScrollProvider sections={sections}></ScrollProvider>
      </SectionDataProvider>
    </>
  );
}

export default Main;

export async function getStaticProps() {
  function getStaticData() {
    const sectionData = Object.values(endpoints).map(async (endpoint) => {
      const filepath = path.join(process.cwd(), endpoint);
      const jsonData = await fsPromises.readFile(filepath);

      return JSON.parse(jsonData);
    });

    return Promise.all(sectionData);
  }

  async function getArchiveData() {
    try {
      const archive_response = await fetch(process.env.GITHUB_REPO_API);

      const invalid_response = !archive_response.ok;
      if (invalid_response) {
        return [];
      }

      return await archive_response.json();
    } catch (err) {
      return [];
    }
  }

  const convertProps = (sectionData, archiveData) => {
    const propData = sectionData.reduce((prev, curr) => {
      return {
        ...prev,
        ...curr,
      };
    }, {});

    propData["archive"].archiveProjects = archiveData;
    return propData;
  };

  const sectionData = await getStaticData();
  const archiveData = await getArchiveData();
  const sectionProps = convertProps(sectionData, archiveData);

  return {
    props: sectionProps,
  };
}
