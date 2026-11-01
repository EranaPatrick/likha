import Link from "next/link";
import { artists, artworks } from "@/data/artworks";
import styles from "./page.module.css";

export const metadata = { title: "Artists / Likha" };

export default function ArtistsPage() {
  return (
    <main className={styles.page}>
      <h1 className={`${styles.title} caps`}>
        Artists [ {artists.length} ]
      </h1>

      <ul className={styles.list}>
        {artists.map((a) => {
          const count = artworks.filter((w) => w.artist === a.slug).length;
          return (
            <li key={a.slug} className={styles.row}>
              <Link href={`/artists/${a.slug}`} className={`${styles.name} caps`}>
                {a.name}
              </Link>
              <span className={`${styles.city} caps`}>{a.city}</span>
              <span className={`${styles.count} caps`}>[ {count} ]</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
