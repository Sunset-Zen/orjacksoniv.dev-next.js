import Image from "next/image";

import Footer from "../comp/Footer";
import "./proj.css";
import blox from "../img/blocks.png";

import findu from "../img/Findu-Blaze.png";
import tenb from "../img/10BND-Final.png";
import drop from "../img/dropnote-logo1.png";

export default function Projects() {
  // Attributes / Hook(s)

  // TSX
  return (
    <main id="Projectpage">
      {/* Side Banner */}
      <div id="pp-sidebar"></div>
      {/* Title Section */}
      <div id="title-section" className="flex">
        <div>
          <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
            <i>
              <b>Projects</b>
            </i>
          </h1>
          <p className="opacity-70">
            <i>Beneath the Surface...</i>
          </p>
        </div>
        <Image src={blox} alt="" id="project-logo" />
      </div>

      {/* Active Projects */}
      <section id="active-projects">
        <h1 id="active-title" className="text-2xl subtitle">
          <b>Under Development</b>
        </h1>

        {/* Project 1 */}
        <div id="findu" className="flex proj-box">
          <div>
            {/* Title & Description */}
            <div className="proj-title-box">
              {/* Title */}
              <div className="flex proj-title text-xl">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
                  <b>Find U</b>
                </h1>
                <h1> | Team</h1>
              </div>
              {/* List / Description */}
              <div>
                <p>
                  <i>Lead Dev : Aiden Matthews</i>
                </p>
                <p>
                  <i>Lead UI / UX Designer : Otis Jackson IV (Me)</i>
                </p>
                <p>
                  <i>Language(s) : Flutter</i>
                </p>
              </div>
            </div>
            {/* Logo */}
            <div id="findu-logo">
              <Image src={findu} alt="" />
            </div>
          </div>
          <div>
            {/* Photos */}
            {/* Description */}
            <div>
              <h1>
                <b>Description</b>
              </h1>
              <div className="opacity-70 p-summary">
                <p>
                  FindU is a mobile application currently in development using
                  Flutter. I’ve had the honor in being brought onto the team as
                  the lead UI / UX designer. The FindU development team is
                  currently led by Aiden Matthews and as stated above we aim to
                  make finding colleges for all incoming freshman seeking higher
                  education.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div id="tenb" className="flex proj-box">
          {/* Title & Description */}
          <div className="proj-title-box">
            {/* Title */}
            <div className="flex proj-title text-xl">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
                <b>10BND</b>
              </h1>
              <h1> | Personal</h1>
            </div>
            {/* List / Description */}
            <div>
              <p>
                <i>Lead Dev : Otis Jackson IV</i>
              </p>
              <p>
                <i>Lead UI / UX Designer : Otis Jackson IV (Me)</i>
              </p>
              <p>
                <i>Language(s) : React Native</i>
              </p>
            </div>
          </div>
          {/* Logo */}
          <div id="tenb-logo">
            <Image src={tenb} alt="" />
          </div>

          {/* Photos */}
          {/* Description */}
          <div></div>
          <h1>
            <b>Description</b>
          </h1>
          <div className="opacity-70 p-summary">
            <p>
              10BND is a mobile application I am currently developing with React
              Native as a simple, easy to use, and in depth time tracker. This
              tracker would keep record of how long a user spent working on a
              skill with cool user profiles and achievements to incentivize them
              to go out and be productive members of society.
            </p>
          </div>
        </div>
      </section>

      {/* Developed Projects */}
      <section id="developed-projects">
        <h1 className="text-2xl subtitle">
          <b>Developed Projects</b>
        </h1>

        {/* Project 1 */}
        <div id="drop" className="flex proj-box">
          <div>
            {/* Title & Description */}
            <div className="proj-title-box">
              {/* Title */}
              <div className="flex proj-title text-xl">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
                  <b>Dropnote</b>
                </h1>
                <h1> | Team</h1>
              </div>
              {/* List / Description */}
              <div>
                <p>
                  <i>Lead Dev : Zeke Abshire</i>
                </p>
                <p>
                  <i>Software Dev : Otis Jackson IV (Me)</i>
                </p>
                <p>
                  <i>Language(s) : Flutter</i>
                </p>
              </div>
            </div>
            {/* Logo */}
            <div id="drop-logo">
              <Image src={drop} alt="" />
            </div>
          </div>
          <div>
            {/* Photos */}
            {/* Description */}
            <div>
              <h1>
                <b>Description</b>
              </h1>
              <div className="opacity-70 p-summary">
                <p>
                  Dropnote was the first full stack project I had the
                  opportunity to work on as a Software Developer on a team of
                  very talented peers in the CSC field. This team was led by
                  Zeke Abshire in which I learned a lot from being introduced to
                  new tools such as Firebase, Figma, Flutter, and Dart. I also
                  saw first hand how to properly scope team projects in a Agile
                  environment as a leader where everyone was allowed to
                  collaborate and successfully deliver a finished mobile
                  application for professors dealing with confidential files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
