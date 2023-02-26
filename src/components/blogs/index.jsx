import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Blog1 from "../../images/blogs/19.jpg";
import Blog2 from "../../images/blogs/2.jpg";
import Blog3 from "../../images/blogs/3.jpg";
import BlogCard from "./blog-card";
import Arrow from "../shared/arrow";
import img101 from "../../images/23.png";

const Blogs = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Section
      id="blogs"
      title="Co mógłbyś/mogłabyś powiedzieć, gdybym został Twoim korepetytorem?"
      background="dark"
    >
      <div className="blogs-content-wrapper">
        <BlogCard
          user="Alojzy Ur"
          date="1 marca 2023"
          image={Blog1}
          title="Jestem zadowolony"
          description="Klarownie i zrozumiale tłumaczy trudne dla mnie zadania z funkcji"
        />
        <BlogCard
          user="Balbina Sar"
          date="2 marca 2023"
          image={Blog2}
          title="Co za ulga"
          description="Cieszę się, że Rafał odrabia ze mną lekcje z geometrii i dzięki temu nie jestem już nogą z matematyki!"
        />
        <BlogCard
          user="Ryszard Lew"
          date="2 marca 2023"
          image={Blog3}
          title="Szacun"
          description="Dzięki Rafałowi zdam maturę z matematyki w tym roku!"
        />
      </div>

      <div className="readmore-cta" onClick={() => toggleTab(1)}>
        <span className="text">Czytaj więcej</span>
        <Arrow />
      </div>
      <div
        className={
          toggleState === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>
          <h3 className="services__modal-title">
            "Dobrze, że trafiłem na Pana Rafała"
          </h3>
          <span className="services__modal-description">
            P. Rafał bardzo dobrze tłumaczy, nawet trudne rzeczy. Po korkach z
            nim mam wrażenie, że doskonale wszystko rozumiem.
          </span>

          <div className="services__modal-services">
            <img src={img101} alt="..." />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blogs;
