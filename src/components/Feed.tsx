"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { artworks, getArtist, formatPrice, type Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
import DetailPanel from "./DetailPanel";
import { useView } from "./ViewContext";
import styles from "./Feed.module.css";

type Sort = "newest" | "price";

// "Oil on canvas" -> "Oil"
const mediaOf = (m: string) => m.split(" ")[0];
const media = Array.from(new Set(artworks.map((a) => mediaOf(a.medium))));

export default function Feed() {
  const { view } = useView();
  const [sort, setSort] = useState<Sort>("newest");
  const [medium, setMedium] = useState<string | null>(null);
  const items = useMemo(() => {
    const copy = artworks.filter((a) => !medium || mediaOf(a.medium) === medium);
    if (sort === "price") copy.sort((a, b) => a.price - b.price);
    else copy.sort((a, b) => b.year - a.year);
    return copy;
  }, [sort, medium]);

  const filterBar = (
    <div className={`${styles.sortBar} caps`}>
      <span>Medium</span>
      <button type="button" className={styles.sortBtn} onClick={() => { setMedium(null); setOpen(null); }} aria-pressed={!medium}>
        {!medium ? "[•]" : "[ ]"} All
      </button>
      {media.map((m) => (
        <button key={m} type="button" className={styles.sortBtn} onClick={() => { setMedium(m); setOpen(null); }} aria-pressed={medium === m}>
          {medium === m ? "[•]" : "[ ]"} {m}
        </button>
      ))}
    </div>
  );

  const sortBar = (
    <div className={`${styles.sortBar} caps`}>
      <span>Sort</span>
      <button type="button" className={styles.sortBtn} onClick={() => setSort("newest")} aria-pressed={sort === "newest"}>
        {sort === "newest" ? "[•]" : "[ ]"} Newest
      </button>
      <button type="button" className={styles.sortBtn} onClick={() => setSort("price")} aria-pressed={sort === "price"}>
        {sort === "price" ? "[•]" : "[ ]"} Price
      </button>
    </div>
  );
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
        {filterBar}
        {sortBar}
        <ul className={styles.list}>
          {items.map((a) => (
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
      {filterBar}
      {sortBar}
      {open && (
        <div ref={openedRef} className={styles.opened}>
          <div className={styles.openedImg}>
            <Image src={open.image} alt={open.title} width={open.width} height={open.height} sizes="50vw" />
          </div>
          <DetailPanel artwork={open} onClose={() => setOpen(null)} />
        </div>
      )}
      <div className={styles.flow}>
        {items.map((a, i) => (
          <div key={a.id} className={`${styles.cell} ${styles["v" + (i % 4)]}`}>
            <ArtworkCard artwork={a} onOpen={setOpen} />
          </div>
        ))}
      </div>
    </section>
  );
}
