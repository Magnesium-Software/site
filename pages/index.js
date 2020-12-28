import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Magnesium Software LLC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <img
          src="/logo.png"
          alt="Magnesium Softfware LLC logo"
          className={styles.logo}
        />

        <h1 className={styles.title}>Magnesium Software LLC</h1>
        <p className={styles.description}>
          Beautiful, Native, and Performant Applications
        </p>
      </main>
    </div>
  );
}
