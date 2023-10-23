import Image from "next/image";
import Link from "next/link";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import scroll from "../app/img/Group.png";
import ologo from "./img/O-Logo.png";

import { Button } from "@/components/ui/button";
import Footer from "./comp/Footer";

// Main Entry Point
export default function Home() {
  return (
    <main id="Homepage" className="">
      {/* Hero Section */}
      <section id="hero" className="">
        {/* Title & Logo Section */}
        <div id="hero-c1">
          <h1 className="text-2xl">Greetings,</h1>
          <h1 className="text-4xl md:text-5xl">
            I'm
            <i>
              <b> Otis Jackson IV</b>
            </i>
          </h1>
          <h1 id="title" className="text-xl">
            <i>Software Engineer & UI / UX Designer</i>
          </h1>
        </div>
        {/* Logo */}
        <Image src={ologo} alt="" id="hero-logo" />

        {/* CTA Section */}
        <div id="hero-c2">
          <h1 className="md:text-xl md:font-medium">
            "Where Elevation is the Standard"
          </h1>
          <div className="flex gap-0">
            {/* button x3 */}
            <a href="https://github.com/Sunset-Zen" target="_blank">
              <Button variant="ghost">
                <AiFillGithub className="hero-c2-links" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/otis-jackson4/"
              target="_blank"
            >
              <Button variant="ghost">
                <AiFillLinkedin className="hero-c2-links" />
              </Button>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=spiritedhokage@gmail.com"
              target="_blank"
            >
              <Button variant="ghost">
                <IoMdMail className="hero-c2-links" />
              </Button>
            </a>
            {/* scroll button */}
            <a href="#pitch">
              <Button variant="ghost" id="scroll-button">
                <Image src={scroll} alt="" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* sidebar */}
      <div id="sidebar"></div>

      {/* Pitch Section */}
      <section id="pitch" className="relative">
        <h1 className="text-white text-2xl md:4xl" id="pitch-header">
          <b>
            <i>My Creative Ambition</i>
          </b>
        </h1>
        <h1 className="text-xl" id="pitch-subheader">
          <i className="">Real Progress Starts With Innovation</i>
        </h1>
        <Image src={ologo} alt="" id="pitch-logo" />
        <div className="text-container">
          <p className="opacity-70">
            Welcome !! I am a Computer Science major enrolled in the College of
            Engineering at Louisiana State University with a primary
            concentration in Software Development.
          </p>
        </div>
        <div className="text-container">
          <p className="opacity-70">
            As an independent creative-minded artist, my aim is to merge my
            concrete creative abilities alongside acquired technical software
            skills to develop and deliver truly captivating awe inspiring
            software applications.
          </p>
        </div>
        <h1 className="text-xl" id="pitch-cta">
          Let's Build Together !!
        </h1>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
