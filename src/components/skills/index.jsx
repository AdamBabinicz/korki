import React from "react";
import "./style.scss";
import Section from "../shared/section";
import img from "../../images/4.png";
import CallToAction from "../shared/callToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import plik from "../../plik.pdf";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={img} alt="..." />
        </div>
        <div className="right-col">
          <h2>Zakres nauki</h2>
          <p>
            <b>Szkoła podstawowa i średnia</b>
          </p>
          <p>
            Podczas lekcji będziesz miał czas na pracę domową i zwrócenie
            szczególnej uwagi na problematyczne tematy.
          </p>
          <p>
            <b>Egzamin ósmoklasisty</b>
          </p>
          <p>
            Przygotowuję uczniów do egzaminu ósmoklasisty z matematyki zgodnie z
            wymaganiami CKE.
          </p>
          <p>
            <b>Matura podstawowa</b>
          </p>
          <p>Zajęcia w ramach przygotowania się do matury podstawowej.</p>
          <p>
            <b>Matura rozszerzona</b>
          </p>
          <p>
            Przygotowuję uczniów do matury z matematyki na poziomie rozszerzonym
            zgodnie z wytycznymi CKE.
          </p>
          <a href={plik} download={plik}>
            <CallToAction text="Pobierz" icon={<AiOutlineCloudDownload />} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
