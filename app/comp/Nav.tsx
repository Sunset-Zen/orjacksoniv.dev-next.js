import Image from "next/image";
import Link from "next/link";
// Images
import ologo from "../img/O-Logo(Edition Pearl).png";

// Components
import { Toggle } from "@/components/ui/toggle";
import SideNav from "./SideNav";

export default function Nav() {
  // Attributes / Hook(s)

  // JSX
  return (
    <nav id="navbar">
      <Link href="/">
        <Image src={ologo} alt="logo" quality={100} />
      </Link>
      <SideNav />
    </nav>
  );
}
