import { data } from "../data/data";
import Subtitle from "../components/subtitle/Subtitle";
import Project from "./components/Project";

const Projects = () => {
  return (
    <div className="w-11/12 md:w-1/2 m-auto pb-12">
      <Subtitle text="projects:_" />
      {data.map((project) => (
        <Project
          title={project.title}
          description={project.description}
          image={project.image}
          githubLink={project.githubLink}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
