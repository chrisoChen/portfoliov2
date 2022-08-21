import Navbar from "../components/Navbar";
import { ScrollProvider } from "../context/ScrollContext";

function Main() {
  // Order matters: first element in list is used as intro section
  const sections = [
    "Intro",
    "About",
    "Experience",
    "Projects",
    "Archive",
    "Contact",
  ];

  return (
    <>
      <ScrollProvider sections={sections}>
        <Navbar />
      </ScrollProvider>
    </>
  );
}

export default Main;
