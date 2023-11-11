import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import useViewport from "../../CustomHooks/UseViewport";


function Navbar({ navBlur, changeBlur }) {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const { width, breakpoint_medium } = useViewport();

  const navToggle = () => {
    changeBlur();

    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        seanSmithDev
      </Link>

      <ul className={active}>
        <li className="nav__item">
          <NavLink
            to="/projects"
            className="nav__link"
            onClick={navToggle}
            style={({ isActive }) =>
              width > breakpoint_medium
                ? {
                    color: isActive ? "#fa4df4" : "rgb(241, 241, 241)",
                  }
                : {
                    color: isActive ? "#1e13ed" : "black",
                  }
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/skills"
            className="nav__link"
            onClick={navToggle}
            style={({ isActive }) =>
              width > breakpoint_medium
                ? {
                    color: isActive ? "#4db8fa" : "rgb(241, 241, 241)",
                  }
                : {
                    color: isActive ? "#1e13ed" : "black",
                  }
            }
          >
            Skills
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/about"
            className="nav__link"
            onClick={navToggle}
            style={({ isActive }) =>
              width > breakpoint_medium
                ? {
                    color: isActive ? "#4dfa8f" : "rgb(241, 241, 241)",
                  }
                : {
                    color: isActive ? "#1e13ed" : "black",
                  }
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contact"
            className="nav__link"
            onClick={navToggle}
            style={({ isActive }) =>
              width > breakpoint_medium
                ? {
                    color: isActive ? "#faac4d" : "rgb(241, 241, 241)",
                  }
                : {
                    color: isActive ? "#1e13ed" : "black",
                  }
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={icon} id="mobile_button">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
