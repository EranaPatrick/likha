"use client";

import Image from "next/image";
import Link from "next/link";
import { artworks, getArtist, formatPrice } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
import { useView } from "./ViewContext";
import styles from "./Feed.module.css";

export default function Feed() {
  const { view } = useView();

  if (view === "list") {
    return (
      <section className={styles.feed}>
        <ul className={styles.list}>
          {artworks.map((a) => (
            <li key={a.id} className={`${styles.row} caps`}>
              <span className={styles.thumb}>
                <Image src={a.image} alt={a.title} fill sizes="80px" />
              </span>
              <span className={styles.rowTitle}>{a.title}</span>
              <Link href={`/artists/${a.artist}`} className={styles.rowArtist}>
                {getArtist(a.artist)?.name}
              </Link>
              <span className={styles.rowMedium}>{a.medium}</span>
              <span className={styles.rowPrice}>{formatPrice(a.price)}</span>
              <span className={styles.rowCount}>[ {a.likes} ]</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className={styles.feed}>
      <div className={styles.flow}>
        {artworks.map((a, i) => (
          <div key={a.id} className={`${styles.cell} ${styles["v" + (i % 4)]}`}>
            <ArtworkCard artwork={a} />
          </div>
        ))}
      </div>
    </section>
  );
}
