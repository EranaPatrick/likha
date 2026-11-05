import Link from "next/link";
import styles from "./page.module.css";

export const metadata = { title: "Sign in / Likha" };

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <h1 className={`${styles.title} caps`}>Sign in</h1>

      <div className={styles.body}>
        <p>
          Accounts are not set up yet. You only need one to like a piece,
          follow an artist or send an inquiry, and everything else is open.
        </p>
        <p className={styles.note}>Coming once the database is in.</p>
        <p className={`${styles.links} caps`}>
          <Link href="/">Back to the work</Link>
        </p>
      </div>
    </main>
  );
}
