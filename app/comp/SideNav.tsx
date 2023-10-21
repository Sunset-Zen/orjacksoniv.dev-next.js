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
import ToggleIcon from "./ToggleIcon";

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
          {/* Sidebar */}
          <div className=""></div>
          <SheetHeader>
            <SheetTitle>
              <h1 className="text-white">Otis Jackson IV</h1>
            </SheetTitle>
          </SheetHeader>

          <SheetFooter>
            {/* List of Navs */}
            <div className="flex-col link-list">
              <div>
                <SheetClose asChild>
                  <Link href="/">Home</Link>
                </SheetClose>
              </div>
              <div>
                <SheetClose asChild>
                  <Link href="/about">About</Link>
                </SheetClose>
              </div>
              <div>
                <SheetClose asChild>
                  <Link href="/projects">Projects</Link>
                </SheetClose>
              </div>
              <div>
                <SheetClose asChild>
                  <Link href="/experience">Experience</Link>
                </SheetClose>
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideNav;
