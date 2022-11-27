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
          date="10 marca 2022"
          image={Blog1}
          title="Jestem zadowolony"
          description="Klarownie i zrozumiale tłumaczy trudne dla mnie zadania z funkcji"
        />
        <BlogCard
          user="Balbina Sar"
          date="30 kwietnia 2022"
          image={Blog2}
          title="Co za ulga"
          description="Cieszę się, że Sebastian odrabia ze mną lekcje z geometrii i dzięki temu nie jestem już nogą z matematyki!"
        />
        <BlogCard
          user="Ryszard Lew"
          date="25 maja 2022"
          image={Blog3}
          title="Szacun"
          description="Dzięki Sebie zdałem maturę z matematyki"
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
            "Dobrze, że trafiłem na Pana Sebastiana"
          </h3>
          <span className="services__modal-description">
            P. Sebastian bardzo dobrze tłumaczy, nawet trudne rzeczy. Po korkach
            z nim mam wrażenie, że doskonale wszystko rozumiem.
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
