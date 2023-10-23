import { Toggle } from "@/components/ui/toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import ToggleIcon from "./ToggleIcon";
import ologo from "../img/O-Logo.png";
import { HiHome } from "react-icons/hi";
import { PiUserCircleFill } from "react-icons/pi";
import { SiBuildkite } from "react-icons/si";
import { MdWorkspacesFilled } from "react-icons/md";

// import { IoMenu } from "react-icons/io5";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import "./nav.css";

const SideNav = () => {
  // Attributes / Hook(s)
  // TSX
  return (
    <div id="side-menu">
      <Sheet>
        {/*  Toggle Button */}
        <SheetTrigger asChild>
          <ToggleIcon />
        </SheetTrigger>

        {/* Actual Side Navbar */}
        <SheetContent className="bg-gradient-to-t from-black to-sunsetpurple">
          {/* Side Banner */}
          <div id="sm-sidebar"></div>
          {/* O Logo */}
          <div className="glow">
            <Image src={ologo} alt="" className="opacity-100" />
          </div>
          {/* Sidebar */}
          <div className=""></div>
          <SheetHeader>
            <SheetTitle>
              <h1 className="text-white text-xl opacity-80">
                <i>Otis Jackson IV</i>
              </h1>
            </SheetTitle>
          </SheetHeader>

          <SheetFooter>
            {/* List of Navs */}
            <div className="flex-col link-list">
              <div className="flex">
                <SheetClose asChild>
                  <Link href="/">
                    <i className="opacity-70">
                      <b>Home</b>
                    </i>
                  </Link>
                </SheetClose>
                <HiHome className="s-icon" />
              </div>
              <div className="flex">
                <SheetClose asChild>
                  <Link href="/about">
                    <i className="opacity-70">
                      <b>About</b>
                    </i>
                  </Link>
                </SheetClose>
                <PiUserCircleFill className="s-icon" />
              </div>
              <div className="flex">
                <SheetClose asChild>
                  <Link href="/projects">
                    <i className="opacity-70">
                      <b>Projects</b>
                    </i>
                  </Link>
                </SheetClose>
                <SiBuildkite className="s-icon" />
              </div>
              <div className="flex">
                <SheetClose asChild>
                  <Link href="/experience">
                    <i className="opacity-70">
                      <b>Experience</b>
                    </i>
                  </Link>
                </SheetClose>
                <MdWorkspacesFilled className="s-icon" />
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideNav;
