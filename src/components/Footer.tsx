import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className="caps">Likha</span>
      <span className={styles.note}>Art by independent artists</span>
      <Link href="/about" className={`caps ${styles.link}`}>
        About
      </Link>
    </footer>
  );
}
