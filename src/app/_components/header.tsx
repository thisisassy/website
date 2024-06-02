import Link from "next/link";

const Header = () => {
  const siteName = "Haruka Ashiuchi";
  return (
    <header>
      <div className="h-20 flex justify-between items-center">
        <h1 className="">
          <Link href="/" className="uppercase hover:none">
            {siteName}
          </Link>
        </h1>
        <nav>
          <ul className="flex items-center gap-x-6">
            <li className="hover:underline"><Link href='/about'>ABOUT</Link></li>
            <li className="hover:underline"><Link href='/posts'>NOTE</Link></li>
            <li className="hover:underline"><Link href='/now'>NOW</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
