import Navbar from "../components/Navbar";
import { ScrollProvider } from "../context/ScrollContext";
import { MediaLinksProvider } from "../context/MediaLinksContext";
import { ExperienceProvider } from "../context/ExperienceContext";
import fsPromises from "fs/promises";
import path from "path";
import endpoints from "../util/endpoints";

function Main(props) {
  const { sections = [], mediaLinks = [], experience = [] } = props;
  const sectionData = {
    ...experience,
  };

  return (
    <>
      <ExperienceProvider experience={experience}>
        <MediaLinksProvider mediaLinks={mediaLinks}>
          <ScrollProvider sections={sections}>
            <Navbar />
          </ScrollProvider>
        </MediaLinksProvider>
      </ExperienceProvider>
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

  const props = (data) => {
    return data.reduce((prev, curr) => {
      return {
        ...prev,
        ...curr,
      };
    }, {});
  };

  const data = await getStaticData();
  const sectionProps = props(data);

  return {
    props: sectionProps,
  };
}
