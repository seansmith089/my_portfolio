import "./techSkills.css";

function TechSkills() {
  return (
    <div className="tech_skills_wrapper">
      {/* <h1>Technical Skills</h1> */}
      <div className="skills_card">
        <div className="skills_grid">
          <div className="grid_item">
            <h2>HTML</h2>
            <p>Intermediate</p>
          </div>
          <div className="grid_item">
            <h2>CSS</h2>
            <p>Intermediate</p>
          </div>
          <div className="grid_item">
            <h2>Javascript</h2>
            <p>Intermediate</p>
          </div>
          <div className="grid_item">
            <h2>React</h2>
            <p>Intermediate</p>
          </div>
          <div className="grid_item">
            <h2>Tailwind</h2>
            <p>Junior</p>
          </div>
          <div className="grid_item">
            <h2>Firebase</h2>
            <p>Junior</p>
          </div>
          <div className="grid_item">
            <h2>Figma</h2>
            <p>Intermediate</p>
          </div>
          <div className="grid_item">
            <h2>Git</h2>
            <p>Junior</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
