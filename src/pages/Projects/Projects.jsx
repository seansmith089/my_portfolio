import ProjectItem from "../../Components/Project_Item/ProjectItem";
import "./projects.css"

import { project_data } from "../../project_data";

function Projects() {
    return (
      <div className="project-page">
        <h1 className="page-title">Projects</h1>

        <div className="project_items_container">
            {project_data.map((project) => (
            <ProjectItem
                key={project.id}
                title={project.title}
                description={project.description}
                apps={project.apps}
                image={project.picture_url}
                gitHub={project.github_link}
                projLink={project.project_link}
            />
            ))}
        </div>
      </div>
    );
}

export default Projects;