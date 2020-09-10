import pokedex from "../assets/pokedex.png"
import devconnector from "../assets/devconnector.png"
import natourslanding from "../assets/natours-landing.png"
import nexterlanding from "../assets/nexter.png"
import natoursfs from "../assets/natours-fs.png"
import prashantportfolio from "../assets/prashantportdolio.png"
import trillo from "../assets/trillo.png"
import kroschke from "../assets/kroschke.png"

export const data = [
  {
    name: "Poke Dex",
    description:
      "A React app with Redux as state management is a front-end only application built for fun and to learn how to handle 3rd party APIs, and uses local storage to save liked pokemon.",
    tech: ["react", "redux", "scss", "axios"],
    live: "https://pdex.netlify.app",
    source: "https://github.com/Rushil-Dhinoja/poke-dex",
    img: pokedex,
  },
  {
    name: "Dev Connector",
    description:
      "A mern stack application that connects developers and lets them post job listings or other useful resources. It uses JWT for authentication and MongoDB Atlas as a cloud database. ",
    tech: ["react", "redux", "css", "axios", "jwt", "expressjs", "mongodb"],
    source: "https://github.com/Rushil-Dhinoja/dev-connector",
    live: "https://safe-oasis-18625.herokuapp.com/",
    img: devconnector,
  },
  {
    name: "Natours E-Commerce",
    description:
      "A simple static website built using HTML and SCSS only is a landing page for a tours company, which also has a full-fledge eCommerce website also developed by me. ",
    tech: ["expressjs", "mongodb", "jwt", "axios", "pug-template"],
    live: "https://natours-rushil.herokuapp.com/",
    source: "https://github.com/Rushil-Dhinoja/Natours",
    img: natoursfs,
  },

  {
    name: "Natours Landing Page",
    description:
      "A simple static website built using HTML and SCSS only is a landing page for a tours company, which also has a full-fledge eCommerce website also developed by me. ",
    tech: ["html", "scss", "bem"],
    source: "https://github.com/Rushil-Dhinoja/NATOURS_CODE_ALONG",
    live: "https://natourslanding.netlify.app/",
    img: natourslanding,
  },
  {
    name: "Kroschke International",
    description:
      "My first ever client project. Is a german License plate company, which provides custom license plates for their customers",
    tech: ["html", "css", "bem", "js"],
    live: "https://kroschke.netlify.app/",
    source: "https://github.com/Rushil-Dhinoja/KROSCHKE-International",
    img: kroschke,
  },
  {
    name: "Prashant Soni Protfolio",
    description:
      "A protfolio website for a friend who's a photographer. Uses JS to create beautiful image gallery ",
    tech: ["html", "scss", "bem", "js"],
    live: "https://prashantsoniphotography.netlify.app/",
    source: "https://github.com/Rushil-Dhinoja/prashant-soni-portfolio",
    img: prashantportfolio,
  },
  {
    name: "Nexter Landing Page",
    description:
      "A simple static website built using HTML and SCSS only is a landing page for a housing comapny.",
    tech: ["html", "scss", "bem"],
    live: "https://nexterlanding.netlify.app/",
    source: "https://github.com/Rushil-Dhinoja/NEXTER",
    img: nexterlanding,
  },
  {
    name: "Trillo Landing Page",
    description:
      "A simple static website built using HTML and SCSS only is a landing page for a Travel comapny.",
    tech: ["html", "scss", "bem"],
    live: "https://trillolanding.netlify.app/",
    source: "https://github.com/Rushil-Dhinoja/TRILLO",
    img: trillo,
  },
]
