"use client";

import Link from "next/link";
import { useView } from "./ViewContext";
import styles from "./Header.module.css";

export default function Header() {
  const { view, setView } = useView();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        likha
      </Link>

      <nav className={`${styles.views} caps`}>
        <button
          type="button"
          className={view === "flow" ? styles.active : undefined}
          onClick={() => setView("flow")}
        >
          {view === "flow" ? "[•]" : "[ ]"} Flow
        </button>
        <button
          type="button"
          className={view === "list" ? styles.active : undefined}
          onClick={() => setView("list")}
        >
          {view === "list" ? "[•]" : "[ ]"} List
        </button>
      </nav>

      <nav className={`${styles.links} caps`}>
        <Link href="/about">About</Link>
        <Link href="/login">Sign in</Link>
      </nav>
    </header>
  );
}
