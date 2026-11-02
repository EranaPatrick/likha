import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <h1 className={`${styles.title} caps`}>Not found [ 404 ]</h1>
      <p className={styles.text}>That page isn&apos;t here, or it got taken down.</p>
      <Link href="/" className={`${styles.link} caps`}>
        Back to the feed
      </Link>
    </main>
  );
}
