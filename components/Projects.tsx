import { featuredProjects, projects } from "@/data/projects";
import ProjectsItem from "./ProjectsItem";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects">
        {featuredProjects.map((project) => {
          return (
            <ProjectsItem
              descTextES={project.descTextES}
              descTextEN={project.descTextEN}
              headingTextES={project.headingTextES}
              headingTextEN={project.headingTextEN}
              imgSrc={project.img}
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
