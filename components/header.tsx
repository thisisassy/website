import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header__inner">
        <h1>HARUKA ASHIUCHI</h1>
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
      </div>
    </header>
  );
}
