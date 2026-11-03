import Link from "next/link";
import styles from "./page.module.css";

export const metadata = { title: "About / Likha" };

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <h1 className={`${styles.title} caps`}>About</h1>

      <div className={styles.body}>
        <p>
          Likha means to make, to create. This is a small place to look at
          work by independent artists and ask about it directly.
        </p>
        <p>
          You can browse everything without an account. Sign in only when you
          want to like a piece, follow an artist or send an inquiry.
        </p>
        <p>
          Artists can switch on a profile and upload their own work. Featured
          pieces at the top are picked by hand.
        </p>
        <p className={`${styles.links} caps`}>
          <Link href="/artists">Artists</Link>
          <Link href="/">Back to the work</Link>
        </p>
      </div>
    </main>
  );
}
