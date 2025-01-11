import Link from "next/link";
import Section from "@/components/Section/section";
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
      <Section heading="Works">
        <p>coming soon</p>
      </Section>
      <Section heading="Blog">
        <ul>
          <article>
            <h3>ブログタイトルが入ります。</h3>
            <p>
              <time dateTime=""></time>
            </p>
            <p>
              記事の抜粋文が2行〜3行程度入ります。記事の抜粋文が2行〜3行程度入ります。
            </p>
          </article>
        </ul>
      </Section>
    </>
  );
}
