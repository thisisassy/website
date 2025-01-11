import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <h1>
          <Link href="/">HARUKA ASHIUCHI</Link>
        </h1>
        <div>
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
              <li>
                <Link href="/policy">Policy</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.social__links}>
            Find me on
            <a
              href="https://www.instagram.com/haruka.asuc/"
              target="_blank"
              rel="newopener"
            >
              Instagram
            </a>
            ,
            <a
              href="https://www.linkedin.com/in/harukaashiuchi"
              target="_blank"
              rel="newopener"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
