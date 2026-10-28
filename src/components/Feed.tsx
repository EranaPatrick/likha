"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { artworks, getArtist, formatPrice, type Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
import DetailPanel from "./DetailPanel";
import { useView } from "./ViewContext";
import styles from "./Feed.module.css";

export default function Feed() {
  const { view } = useView();
  const [open, setOpen] = useState<Artwork | null>(null);
  const openedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // bring the opened work into view, otherwise it opens off screen when you clicked low in the feed
  useEffect(() => {
    if (open) openedRef.current?.scrollIntoView({ block: "start" });
  }, [open]);

  if (view === "list") {
    return (
      <section key={view} className={styles.feed}>
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
    <section key={view} className={styles.feed}>
      {open && (
        <div ref={openedRef} className={styles.opened}>
          <div className={styles.openedImg}>
            <Image src={open.image} alt={open.title} width={open.width} height={open.height} sizes="50vw" />
          </div>
          <DetailPanel artwork={open} onClose={() => setOpen(null)} />
        </div>
      )}
      <div className={styles.flow}>
        {artworks.map((a, i) => (
          <div key={a.id} className={`${styles.cell} ${styles["v" + (i % 4)]}`}>
            <ArtworkCard artwork={a} onOpen={setOpen} />
          </div>
        ))}
      </div>
    </section>
  );
}
