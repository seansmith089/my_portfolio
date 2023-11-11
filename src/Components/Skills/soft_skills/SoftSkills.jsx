import "./softSkills.css"

function SoftSkills() {
    return (
      <div className="soft_skills_wrapper">
        <h2>Soft Skills</h2>
        <div className="soft_skill_card">
          <p>
            To compliment my technical skills, I have also had the chance to develop my soft skills 
          </p>

          <div className="soft_skill_item_wrapper">
            <h2>Peer Training</h2>
            <p>
              Providing technical training to junior team members, as well as
              being a point of escalation for any issues they may be having.
            </p>
          </div>

          <div className="soft_skill_item_wrapper">
            <h2>Meeting Lead</h2>
            <p>
              I have a wealth of experience leading meetings with clients and
              other technical staff to discuss any concerns, known technical
              issues, and any planned changes to be implemented
            </p>
          </div>

          <div className="soft_skill_item_wrapper">
            <h2>Peer Training</h2>
            <p>
              I often work with 3rd party vendors, and being able to effectively
              articulate a technical issue and work together on a solution is a
              skill I have become proficient at.
            </p>
          </div>
        </div>
      </div>
    );
}

export default SoftSkills;