import React, { useState } from "react";
import "./style.scss";

const BlogCard = ({ user, date, image, title, description }) => {
  return (
    <div className="blog-card">
      <div className="image-section">
        <img src={image} alt={title} />
      </div>
      <div className="content-section">
        <div className="info-bar">
          <div className="user-name">Od: {user}</div>
          <div className="posted-date">{date}</div>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        {/* <div className="readmore-cta" onClick={() => toggleTab(1)}>
          <span className="text">Czytaj więcej</span>
          <Arrow />
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;
