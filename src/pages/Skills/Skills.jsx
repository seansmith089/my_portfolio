import "./skills.css"
import TechSkills from "../../Components/Skills/tech_skills/TechSkills";
import Certifications from "../../Components/Skills/certifications/Certifications";
import SoftSkills from "../../Components/Skills/soft_skills/SoftSkills";

function Skills() {
    return (
      <div className="skills_page">
        <h1 className="page-title">Skills</h1>
        <TechSkills />
        <Certifications />
        <SoftSkills />
      </div>
    );
}

export default Skills;