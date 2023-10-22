import Image from "next/image";

import Footer from "../comp/Footer";
import "./exp.css";

import exp from "../img/exp.png";

export default function Experience() {
  // Attributes / Hook(s)

  // TSX
  return (
    <main id="Experiencepage">
      {/* Side Banner */}
      <div id="ep-sidebar"></div>
      {/* Title Section */}
      <div id="title-section" className="flex">
        <div id="exp-titles">
          <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
            <i>
              <b>Experience</b>
            </i>
          </h1>
          <p className="z-40">
            <i>Hands On Real World Projects...</i>
          </p>
        </div>
        <Image src={exp} alt="" id="exp-logo" className="z-10" />
      </div>

      {/* Internships */}
      <section id="internships" className="">
        <h1 className="text-white text-2xl" id="internship-title">
          <i>
            <b>Internships</b>
          </i>
        </h1>
        {/* Internship 1 */}
        <section id="i1">
          <div className="flex gap-2">
            <h1>
              <i>
                <b className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
                  Software Engineer Intern
                </b>
              </i>
            </h1>
            <p className="text-white"> | Summer 2023</p>
          </div>
          <h1 className="text-blue-600">
            <i>Lockheed Martin</i>
          </h1>

          <div className="description">
            <h1 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
              {/* <i>
                <b>Description</b>
              </i> */}
              Description
            </h1>
            <div className="summary">
              <p className="opacity-70">
                <i>
                  Gained experience on the Full Stack Engineering team learning
                  the skills of web development working with Javascript,
                  Typescript, and CSS through React.js to develop a useful
                  interactive frontend UI Library that would be used for the
                  Lockheed company software applications. Contributed and
                  successfully developed a timezone based component in the UI
                  Library the Full Stack Engineering team was in development on.
                </i>
              </p>
            </div>
            <h1 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange acquired">
              {/* <i>
                <b>Acquired Skills</b>
              </i> */}
              Acquired Skills
            </h1>
            <div className="flex a-skills">
              <p>Javascript</p>
              <p>Typescript</p>
              <p>React.js</p>
            </div>
          </div>
        </section>

        {/* Internship 2 */}
        <section id="i2">
          <div className="flex gap-2">
            <h1>
              <i>
                <b className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
                  Testing & Automation Intern
                </b>
              </i>
            </h1>
            <p className="text-white"> | Summer 2022</p>
          </div>
          <h1 className="text-blue-600">
            <i>Lockheed Martin</i>
          </h1>

          <div className="description">
            <h1 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
              {/* <i>
                <b>Description</b>
              </i> */}
              Description
            </h1>
            {/* Summary */}
            <div className="summary">
              <p className="opacity-70">
                <i>
                  Gained experience on the Systems Integration team learning
                  web-automation working with the Python / C based framework
                  Selenium Robot to run various tests on classified applications
                  through code translation. Successfully implemented an in-depth
                  automated test on a key function located in one of Lockheed’s
                  classified applications.
                </i>
              </p>
            </div>
            {/* Acquired */}
            <h1 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange acquired">
              {/* <i>
                <b>Acquired Skills</b>
              </i> */}
              Acquired Skills
            </h1>
            <div className="flex a-skills">
              <p>Robot Selenium</p>
              <p>Gitlab</p>
              <p>Test Automation</p>
              <p>Scrum</p>
            </div>
          </div>
        </section>
      </section>

      {/* On-Campus Jobs */}
      <section id="on-campus">
        <h1 className="text-white text-2xl" id="on-campus-title">
          <i>
            <b>On-Campus Jobs</b>
          </i>
        </h1>
        {/* oc Job 1 */}
        <section id="i1">
          <div className="flex gap-2">
            <h1>
              <i>
                <b className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
                  ITS Print Desk Assistant
                </b>
              </i>
            </h1>
            <p className="text-white"> | 2022 - 2023</p>
          </div>
          <h1 className="text-violet-600">
            <i>Louisiana State University</i>
          </h1>

          <div className="description">
            <h1 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
              {/* <i>
                <b>Description</b>
              </i> */}
              Description
            </h1>
            <div className="summary">
              <p className="opacity-70">
                <i>
                  Working as an ITS Print Desk Assistant, I've gained valuable
                  experience in customer service learning to utilize software
                  applcations such as Microsoft Teams for effective
                  communication amongst coworkers and data analysts and Adobve
                  Photoshop for the production of printing large format posters
                  intended for upcoming conventions.
                </i>
              </p>
            </div>
            <h1 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange acquired">
              {/* <i>
                <b>Acquired Skills</b>
              </i> */}
              Acquired Skills
            </h1>
            <div className="flex a-skills">
              <p>Adobe Photoshop</p>
              <p>Customer Service</p>
              <p>Microsoft Teams</p>
            </div>
          </div>
        </section>
        {/* oc job 2 */}
        <section id="i1">
          <div className="flex gap-2">
            <h1>
              <i>
                <b className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
                  RES Life Desk Assistant
                </b>
              </i>
            </h1>
            <p className="text-white"> | 2021</p>
          </div>
          <h1 className="text-violet-600">
            <i>Louisiana State University</i>
          </h1>

          <div className="description">
            <h1 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange">
              {/* <i>
                <b>Description</b>
              </i> */}
              Description
            </h1>
            <div className="summary">
              <p className="opacity-70">
                <i>
                  Working as an ITS Print Desk Assistant, I've gained valuable
                  experience in customer service learning to utilize software
                  applcations such as Microsoft Teams for effective
                  communication amongst coworkers and data analysts and Adobve
                  Photoshop for the production of printing large format posters
                  intended for upcoming conventions.
                </i>
              </p>
            </div>
            <h1 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-sunsetpink to-sunsetorange acquired">
              {/* <i>
                <b>Acquired Skills</b>
              </i> */}
              Acquired Skills
            </h1>
            <div className="flex a-skills">
              <p>Customer Service</p>
              <p>Storage Management</p>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
