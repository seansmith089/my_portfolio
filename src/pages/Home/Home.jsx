import "./home.css"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="home-page">
        <main className="home-container">
          <div className="home-text-container">
            <div className="home-name-container">
              <h1>Sean</h1>
              <h1>Smith</h1>
              <div className="subheading-wrapper">
                <div className="line-container">
                  <div className="home-line-div"></div>
                </div>
                <div className="home-subheading">Front End Developer</div>
              </div>
            </div>
          </div>
          <div className="home-icons-container">
            <Link to="https://github.com/seansmith089" target="_blank">
              <BsGithub className="home-social-icon" />
            </Link>
            <Link to="https://www.linkedin.com/in/seansmithtech/" target="_blank">
              <BsLinkedin className="home-social-icon" />
            </Link>
          </div>
        </main>
        <article>
          <div className="home-summary">
            A Sydney based front end developer, with a history in computer
            animation and over 8 years in the IT industry
          </div>
        </article>

        <div className="home-button-wrapper">
          <button className="home-button-main">
            <Link to="./projects">My Projects</Link>
          </button>
        </div>
      </div>
    );
}

export default Home;