import { nanoid } from "nanoid";

// ICONS
import html from "../src/images/icons/html.svg";
import css from "../src/images/icons/css.svg";
import js from "../src/images/icons/javascript.svg";
import react from "../src/images/icons/react.svg";
import figma from "../src/images/icons/figma.svg";
import firebase from "../src/images/icons/firebase.svg";
import tailwind from "../src/images/icons/tailwind.svg";

// PROJECT IMAGES

import astro from "../src/images/project_images/astro.png";
import tip_calc from "../src/images/project_images/tip_calculator.png";
import ip_tracker from "../src/images/project_images/ip_tracker.png";
import todo from "../src/images/project_images/todo.png";
import crypto from "../src/images/project_images/crypto.png";

export const project_data = [
  {
    title: "Giulia Frati Portfolio",
    description: "Commissioned website for Italian-based artist, Giulia Frati.",
    picture_url: astro,
    apps: [html, css, js, react, figma],
    github_link: "https://github.com/seansmith089/GuiliaFratiArtwork",
    project_link: "https://giuliafratiart.com/",
    id: nanoid(),
  },
  {
    title: "CoinCube App",
    description: "Live cryptocurrency tracker with Firebase authentication.",
    picture_url: crypto,
    apps: [html, js, react, figma, firebase, tailwind],
    github_link: "address",
    project_link: "https://crypto-app-40413.web.app/",
    id: nanoid(),
  },
  {
    title: "IP Address Tracker",
    description:
      "IP tracker created using React, the Leaflet JS Library, and the IPIFY geo-location API.",
    picture_url: ip_tracker,
    apps: [html, css, js, react, figma],
    github_link: "https://github.com/seansmith089/IP_Tracker",
    project_link: "https://seansmith089.github.io/IP_Tracker/",
    id: nanoid(),
  },
  {
    title: "Tip Calculator",
    description:
      "Tip calculator/ bill splitter created web-app created in React.",
    picture_url: tip_calc,
    apps: [html, css, js, react, figma],
    github_link: "https://github.com/seansmith089/Tip_Calculator",
    project_link: "https://seansmith089.github.io/Tip_Calculator/",
    id: nanoid(),
  },
  {
    title: "To do list with Firebase",
    description: "A small to-do web app, created with React and Firebase.",
    picture_url: todo,
    apps: [html, css, js, react, firebase],
    github_link: "https://github.com/seansmith089/todo",
    project_link: "https://seansmith089.github.io/todo/",
    id: nanoid(),
  },
];
