import React from "react";

import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoFigma,
  BiLogoGithub,
  BiLogoNodejs,
  BiLogoChrome,
} from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
// import "./About.css";
import "../about.css";

const Carousel = () => {
  // Attributes | Hook(s)
  // TSX
  return (
    <div id="carousel">
      <div className="flex animate-slide" id="carousel-slide">
        <BiLogoJava className="carousel-child" />
        <BiLogoJavascript className="carousel-child" />
        <SiCsharp className="carousel-child" />
        <BiLogoPython className="carousel-child" />
        <FaReact className="carousel-child" />
        <BiLogoFigma className="carousel-child" />
        <BiLogoGithub className="carousel-child" />
        <BiLogoNodejs className="carousel-child" />
        <BiLogoChrome className="carousel-child" />
      </div>
      <div className="flex animate-slide" id="carousel-slide">
        <BiLogoJava className="carousel-child" />
        <BiLogoJavascript className="carousel-child" />
        <SiCsharp className="carousel-child" />
        <BiLogoPython className="carousel-child" />
        <FaReact className="carousel-child" />
        <BiLogoFigma className="carousel-child" />
        <BiLogoGithub className="carousel-child" />
        <BiLogoNodejs className="carousel-child" />
        <BiLogoChrome className="carousel-child" />
      </div>
    </div>
  );
};

export default Carousel;
