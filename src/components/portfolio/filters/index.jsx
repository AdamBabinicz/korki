import React, { useState } from "react";

import "./style.scss";

const filtersData = [
  {
    name: "Razem",
    id: "all",
  },
  {
    name: "Szk. Podstawowa",
    id: "product",
  },
  {
    name: "E 8",
    id: "web-page",
  },
  {
    name: "Szk. Średnia",
    id: "web-app",
  },
  {
    name: "Matura",
    id: "mobile-app",
  },
  // {
  //   name: "Studia",
  //   id: "studia",
  // },
];

const Filters = ({ filterProjects }) => {
  const [active, setActive] = useState("");

  const clickHandler = (id) => {
    setActive(id);
    filterProjects(id);
  };

  return (
    <ul className="filter-menu-items">
      {filtersData.map((item) => {
        return (
          <li
            key={item.id}
            className={`filter-menu-item ${active === item.id ? "active" : ""}`}
            onClick={() => clickHandler(item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
