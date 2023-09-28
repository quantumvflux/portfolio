import { Job, jobs } from "@/app/data/data";
import Project from "../components/Project";

const Jobs = () => {
  return (
    <div className="pb-12">
      {jobs.map((project) => (
        <Project
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Jobs;
