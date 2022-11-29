import React, { useState } from "react";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
  {
    id: 1,
    name: "Klasy 4-6",
    tags: ["...", "product"],
    media: {
      thumbnail: require("../../images/portfolio/1.jpg"),
    },
  },
  {
    id: 2,
    name: "Klasy 7-8",
    tags: ["product"],
    media: {
      thumbnail: require("../../images/portfolio/6.jpg"),
    },
  },
  {
    id: 3,
    name: "E 8",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/2.jpg"),
    },
  },
  {
    id: 4,
    name: "Pierwsza część",
    tags: ["web-app", "..."],
    media: {
      thumbnail: require("../../images/portfolio/3.jpg"),
    },
  },
  {
    id: 5,
    name: "Druga część",
    tags: ["web-app", "..."],
    media: {
      thumbnail: require("../../images/portfolio/4.jpg"),
    },
  },
  {
    id: 6,
    name: "Matura",
    tags: ["...", "...", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/5.jpg"),
    },
  },
  {
    id: 7,
    name: "Egzamin maturalny",
    tags: ["mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/7.jpg"),
    },
  },
  // {
  //   id: 8,
  //   name: "Studia",
  //   tags: ["studia", "...", "..."],
  //   media: {
  //     thumbnail: require("../../images/portfolio/2.webp"),
  //   },
  // },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTransition("zoomout");

    setTimeout(() => {
      if (tag !== "all") {
        const filteredProjects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setProjects(filteredProjects);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomin");
    }, 200);

    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  return (
    <Section id="portfolio" title="Materiały do nauki" background="light">
      <div className="portfolio-content-wrapper">
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
      </div>
    </Section>
  );
};

export default Portfolio;
