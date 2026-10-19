import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        likha
      </Link>

      <nav className={`${styles.views} caps`}>
        <span className={styles.active}>[•] Flow</span>
        <span>[ ] List</span>
      </nav>

      <nav className={`${styles.links} caps`}>
        <Link href="/about">About</Link>
        <Link href="/login">Sign in</Link>
      </nav>
    </header>
  );
}
