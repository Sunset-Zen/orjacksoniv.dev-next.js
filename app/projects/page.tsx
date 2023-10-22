import Image from "next/image";

import Footer from "../comp/Footer";
import "./proj.css";
import blox from "../img/blocks.png";

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
          <h1 className="text-white text-2xl">
            <i>
              <b>Projects</b>
            </i>
          </h1>
          <h1 className="text-xl opacity-70">
            <i>Beneath the Surface...</i>
          </h1>
        </div>
        <Image src={blox} alt="" id="project-logo" />
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
