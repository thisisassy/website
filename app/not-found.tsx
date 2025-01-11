import Link from "next/link";
import styles from "./page.module.scss";

export default function NotFound() {
  return (
    <div className={styles.error__content}>
      <h2>Ooops!</h2>
      <h4>Sorry, This page could not be found.</h4>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
