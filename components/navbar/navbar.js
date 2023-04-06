import Link from "next/link";
import navStyles from "./navbar.module.css"

export default function Navbar() {
    return(
        <nav className={navStyles.nav}>
            <Link href="/" className={navStyles.nav_title}>Deen Wears</Link>
            <div className={navStyles.nav_links}>
            <Link href="#services">services</Link>
            <Link href="#pricing">About</Link>
            <Link href="#contact">Contact Us</Link>
            </div>
        </nav>
    )
}