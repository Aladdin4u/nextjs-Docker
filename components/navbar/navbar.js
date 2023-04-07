import Link from "next/link";
import navStyles from "./navbar.module.css";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className={navStyles.nav}>
      <Link href="/" className={navStyles.nav_title} >
        Deen<span className={navStyles.nav_span}>Wears</span> 
      </Link>
      <MdMenu size={24} className={navStyles.menu} onClick={handleClick} />
      {open && (
        <div className={navStyles.openmenu} onClick={handleClick} >
          <div className={navStyles.nav_links}>
            <MdClose className={navStyles.closenmenu} />
            <Link href="/">Home</Link>
            <Link href="#services">services</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
