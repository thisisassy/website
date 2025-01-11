import styles from "./section.module.scss";

export default function Section({
  heading,
  children,
}: Readonly<{
  heading: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>
      {children}
    </section>
  );
}
