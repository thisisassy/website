import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h1>
          <Link href="/">HARUKA ASHIUCHI</Link>
        </h1>
        <nav>
          <ul className={styles.navi}>
            <li>
              <Link href="/works">Works</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
