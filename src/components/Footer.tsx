import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className="caps">Likha</span>
      <span className={styles.note}>Art by independent artists</span>
      <span className={styles.links}>
        <Link href="/artists" className={`caps ${styles.link}`}>
          Artists
        </Link>
        <Link href="/about" className={`caps ${styles.link}`}>
          About
        </Link>
      </span>
    </footer>
  );
}
