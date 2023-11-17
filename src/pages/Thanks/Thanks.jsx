import { Link } from "react-router-dom";

import "./thanks.css"

function Thanks() {

    return (
      <div className="color_bg thanks_page">
        <div className="thanks_wrapper">
          <h1 className="thanks_txt">Thanks!</h1>
          <p className="thanks_message">
            I'll get back to you as soon as possible.
          </p>
          <button className="home-button-main thanks_button">
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    );
}

export default Thanks;