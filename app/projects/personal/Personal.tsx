import { projects } from "@/app/data/data";
import Project from "../components/Project";

const Personal = () => {
  return (
    <div className="pb-12">
      {projects.map((project) => (
        <Project
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Personal;
