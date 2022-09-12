import { ScrollProvider } from "../context/ScrollContext";
import { SectionDataProvider } from "../context/SectionDataContext";
import endpoints from "../util/endpoints";
import {
  getArchiveData,
  getSectionData,
  convertProps,
} from "../util/getData.js";

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
  const sectionData = await getSectionData(endpoints);
  const archiveData = await getArchiveData(process.env.GITHUB_REPO_API);
  const sectionProps = convertProps(sectionData, archiveData);
  return {
    props: sectionProps,
  };
}
