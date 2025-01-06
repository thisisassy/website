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
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </nav>
          <ul>
            {/* TODO: Social links */}
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
