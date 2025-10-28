import style from "./navbar.module.css";
import Link from "next/link";

/**Navbar can be used to put links to pages. */
export default function Navbar() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
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
