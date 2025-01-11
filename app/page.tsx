import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.intro}>
        <p>
          <span className={styles.name}>HARUKA ASHIUCHI</span> is a{" "}
          <span>writer</span> and <span>translator</span>
          working in <span>Japanese, English,</span> and <span>French</span>
          {""}
          based in Japan.
        </p>
        <Link href="/about" className={styles.link__profile}>
          Check out my profile
        </Link>
      </div>
      <section>
        <h2>Works</h2>
      </section>
      <section>
        <h2>Blog</h2>
      </section>
      <div>Get in touch</div>
    </>
  );
}
