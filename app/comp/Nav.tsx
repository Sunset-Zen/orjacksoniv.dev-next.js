import Image from "next/image";
import Link from "next/link";
// Images
import ologo from "../img/O-Logo(Edition Pearl).png";

// Components
import SideNav from "./SideNav";

export default function Nav() {
  // Attributes / Hook(s)

  // JSX
  return (
    <nav id="navbar">
      {/* Nav Logo */}
      <Link id="navbar-logo" href="/">
        <Image src={ologo} alt="logo" quality={100} />
      </Link>
      {/* links list */}
      <div id="top-nav" className="flex">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Link href="/about">
          <h1>About</h1>
        </Link>
        <Link href="/projects">
          <h1>Projects</h1>
        </Link>
        <Link href="/experience">
          <h1>Experience</h1>
        </Link>
      </div>
      <SideNav />
    </nav>
  );
}
