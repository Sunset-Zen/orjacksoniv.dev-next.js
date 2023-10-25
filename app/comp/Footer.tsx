import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import ologo from "../img/O-Logo.png";

import "./nav.css";

const Footer = () => {
  // Attributes / Hook(s)

  // TSX
  return (
    <div id="footer" className="flex">
      {/* Logo Section */}
      <section className="flex">
        {/* Image */}
        <Image src={ologo} alt="" id="footer-logo" />
        {/* Title and External Web Links */}
        <div id="e-links">
          <h1 className="text-xl">
            <b>Otis Jackson IV</b>
          </h1>
          <div className="gap-0">
            <div className="flex gap-4">
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=spiritedhokage@gmail.com"
                target="_blank"
              >
                <IoMdMail className="" />
              </a>
              <p className="opacity-60 text-sm">spiritedhokage@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Sunset-Zen" target="_blank">
                <AiFillGithub className="" />
              </a>
              <p className="opacity-60 text-sm">
                https://github.com/Sunset-Zen
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/otis-jackson4/"
                target="_blank"
              >
                <AiFillLinkedin className="" />
              </a>
              <p className="opacity-60 text-sm">
                www.linkedin.com/in/otis-jackson4/
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Quick Links */}
      <section className="flex" id="footer-site-links">
        <a href="/" className="text-right">
          <h1>Home</h1>
        </a>
        <div>
          <a href="/about" className="text-right">
            <h1>About</h1>
          </a>
          <div className="flex-col gap-0 sub-link text-right">
            <a href="/about/#skillset">
              <p className="opacity-60">Skillset</p>
            </a>
            <a href="/about/#education">
              <p className="opacity-60">Education</p>
            </a>
          </div>
        </div>
        <div>
          <a href="/projects" className="text-right">
            <h1>Projects</h1>
          </a>
          <div className="flex-col gap-0 sub-link text-right">
            <a href="/projects"></a>
            <p className="opacity-60">Active</p>
            <a href="/projects"></a>
            <p className="opacity-60">Developed</p>
          </div>
        </div>
        <div>
          <a href="/experience" className="text-right">
            <h1>Experience</h1>
          </a>
          <div className="flex-col gap-0 sub-link text-right">
            <a href="/experience"></a>
            <p className="opacity-60">Internships</p>
            <a href="/experience"></a>
            <p className="opacity-60">On-Campus</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
