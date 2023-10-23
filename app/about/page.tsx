import Image from "next/image";

import Footer from "../comp/Footer";
import Carousel from "./comp/Carousel";

import aboutlogo from "../img/iconamoon_profile.png";
import { RiFilePaper2Fill, RiGraduationCapFill } from "react-icons/ri";
import "./about.css";

export default function About() {
  // Attributes / Hook(s)

  // TSX
  return (
    <main id="Aboutpage">
      {/* ap-sidebar */}
      <div id="ap-sidebar"></div>
      {/* Title Section */}
      <div id="title-section" className="flex">
        <div>
          <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
            <i>
              <b>About Me</b>
            </i>
          </h1>
          <p className="opacity-70">
            <i>Beneath the Surface...</i>
          </p>
        </div>
        {/* Image */}
        <Image src={aboutlogo} alt="" id="about-logo" />
      </div>

      {/* Skill Section */}
      <section id="skillset">
        <h1 className="text-white text-2xl" id="skillset-title">
          <i>
            <b>Software Skillset</b>
          </i>
        </h1>
        {/* Skill List */}
        <div className="flex" id="skill-list">
          {/* Dev Languages */}
          <div>
            <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
              <i>
                <b>Dev Languages</b>
              </i>
            </h1>
            <div className="flex list-items">
              <ul className="list-none">
                <p>Javascript</p>
                <p>HTML</p>
                <p>CSSS</p>
              </ul>
              <ul className="list-none">
                <p>Java</p>
                <p>C#</p>
                <p>Python</p>
              </ul>
              <ul className="list-none">
                <p>MySQL</p>
                <p>SQL</p>
              </ul>
            </div>
          </div>
          {/* Frameworks */}
          <div>
            <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
              <i>
                <b>Frameworks</b>
              </i>
            </h1>
            <div className="flex list-items" id="">
              <ul className="list-none">
                <p>React.js</p>
                <p>Next.js</p>
                <p>React Native</p>
              </ul>
              <ul className="list-none">
                <p>Node.js</p>
                <p>Material UI</p>
                <p>Chakra UI</p>
              </ul>
            </div>
          </div>
          {/* Tools */}
          <div>
            <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
              <i>
                <b>Tools</b>
              </i>
            </h1>
            <div className="flex">
              <ul className="list-none">
                <p>Figma</p>
                <p>Git / Github</p>
                <p>Jira Software</p>
                <p>Chrome Dev Tools</p>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Icon List */}
      <Carousel />

      {/* Education Section */}
      <section id="education">
        <h1 className="text-white text-2xl" id="education-title">
          <i>
            <b>Educational History</b>
          </i>
        </h1>
        {/* Content */}
        <div className="flex" id="education-list">
          {/* Academic Timeline */}
          <div>
            <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
              <b>
                <i>Academic Timeline</i>
              </b>
            </h1>
            <div id="school-list">
              <div className="flex">
                <p>Aledo High School</p>
                <p id="d1">(2016 - 2020)</p>
              </div>
              <div className="flex">
                <p>Weatherford College</p>
                <p id="d2">(2019 - 2020)</p>
              </div>
              <div className="flex">
                <p>Louisiana State University</p>
                <p id="d3">(2020 - Curr.)</p>
              </div>
            </div>
            <div id="education-paragraph">
              <p className="opacity-70">
                <i>
                  I am originally from the great state of Texas. Born in Fort
                  Worth, Texas I grew up around the DFW metroplex in Dallas.
                  Grand Prarie to be more specific during my transformative
                  years. I was always passionate and had an academic inclination
                  to strive to be my best in anything I apply myself to.
                </i>
              </p>
            </div>
          </div>
          {/* Awards & Certifications */}
        </div>
      </section>
      {/* Awards / Certifications Section */}
      <section id="awards">
        {/* <div> */}
        <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
          <b>
            <i>Awards & Certifications</i>
          </b>
        </h1>
        <div id="award-list">
          <div className="flex">
            <p>Dean's List</p>
            <p id="a1">Spring 2023</p>
          </div>
          <div className="flex">
            <p>Black Scholar Award</p>
            <p id="a2">Spring 2023</p>
          </div>
          <div className="flex">
            <p>Dean's List</p>
            <p id="a3">Spring 2021</p>
          </div>
          <div className="flex">
            <p>Black Scholar Award</p>
            <p id="a4">Spring 2021</p>
          </div>
        </div>
        {/* ABout Icons */}
        <div className="flex" id="about-icons-container">
          <RiFilePaper2Fill className="about-icons" />
          <RiGraduationCapFill className="about-icons" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
