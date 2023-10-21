import Image from "next/image";
import Link from "next/link";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import scroll from "../app/img/Group.png";

import { Button } from "@/components/ui/button";

// Main Entry Point
export default function Home() {
  return (
    <main id="Homepage" className="">
      {/* Hero Section */}
      <section id="hero" className="">
        {/* Title & Logo Section */}
        <div id="hero-c1">
          <h1 className="text-3xl">Greetings,</h1>
          <h1 className="text-4xl">
            Im <i>Otis Jackson IV</i>
          </h1>
          <h3 className="text-xl">
            <i>Software Engineer & UI / UX Designer</i>
          </h3>
        </div>
        {/* Logo */}

        {/* CTA Section */}
        <div id="hero-c2">
          <h1>
            <i>"Where Elevation is the Standard"</i>
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

      {/* Pitch Section */}
      <section id="pitch" className="relative">
        <h1 className="text-white text-2xl">
          <b>
            <i>My Creative Ambition</i>
          </b>
        </h1>
        <h1 className="text-xl">
          <i>Real Progress Starts With Innovation</i>
        </h1>
        <p className="opacity-70">
          Welcome !! I am a Computer Science major enrolled in the College of
          Engineering at Louisiana State University with a primary concentration
          in Software Development.
        </p>
        <p className="opacity-70">
          As an independent creative-minded artist, my aim is to merge my
          concrete creative abilities alongside acquired technical software
          skills to develop and deliver truly captivating awe inspiring software
          applications.
        </p>
        <h1 className="text-xl">Let's Build Together !!</h1>
      </section>
    </main>
  );
}
