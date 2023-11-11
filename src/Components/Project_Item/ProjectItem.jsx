import "./projectitem.css";
import { Link } from "react-router-dom";

import { nanoid } from "nanoid";

import github from "../../images/icons/github.svg";

function ProjectItem({ title, description, apps, image, gitHub, projLink }) {
  return (
    <div className="project_card">
      <div className="project_image_wrapper">
        <img className="project_image" src={image} alt="" />
      </div>
      <div className="project_description_wrapper">
        <div className="project_description_left">
          <h1 className="project_description_title">{title}</h1>
          <article className="project_description_text">{description}</article>
          <div className="project_icon_container">
            <div className="project_icon_apps_container">
              {apps?.map((icon) => (
                <img className="tool_icon" src={icon} key={nanoid()} />
              ))}
            </div>

            <div className="project_icon_contanier_right">
              <Link to={gitHub} target="_blank">
                <img src={github} alt="github icon" />
              </Link>
              <Link to={projLink} target="_blank">
                <button className="project-view-btn">view</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="project_description_right"></div>
      </div>
    </div>
  );
}

export default ProjectItem;
