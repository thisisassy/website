import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="footer__inner">
        <h1>HARUKA ASHIUCHI</h1>
        <div>
          <nav>
            <ul>
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
          Find me on
          <ul>
            <li>
              <a
                href="https://www.instagram.com/haruka.asuc/"
                target="_blank"
                rel="newopener"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/harukaashiuchi"
                target="_blank"
                rel="newopener"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
