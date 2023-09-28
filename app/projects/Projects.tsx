import Subtitle from "../components/subtitle/Subtitle";
import Jobs from "./jobs/Jobs";
import Personal from "./personal/Personal";

const Projects = () => {
  return (
    <div className="w-11/12 md:w-1/2 m-auto pb-12">
      <Subtitle text="jobs:_" />
      <Jobs />
      <Subtitle text="projects:_" />
      <Personal />
    </div>
  );
};

export default Projects;
