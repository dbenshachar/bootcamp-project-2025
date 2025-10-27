import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // Link styles to CSS for navbar
    <header className={style.header}>
      <nav className={style.nav}>
        {/**Link to other sections of the website */}
        <Link href="/" className={style.link}>
          Home
        </Link>
        <Link href="/blogs" className={style.link}>
          Blogs
        </Link>
        <Link href="/resume" className={style.link}>
          Resume
        </Link>
        <Link href="/contact" className={style.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
