"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { artworks, getArtist, formatPrice, type Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
import DetailPanel from "./DetailPanel";
import { useView } from "./ViewContext";
import styles from "./Feed.module.css";

type Sort = "newest" | "oldest" | "price" | "priceDesc" | "liked";

// "Oil on canvas" -> "Oil"
const mediaOf = (m: string) => m.split(" ")[0];
const media = Array.from(new Set(artworks.map((a) => mediaOf(a.medium))));

export default function Feed() {
  const { view } = useView();
  const [sort, setSort] = useState<Sort>("newest");
  const [medium, setMedium] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Artwork | null>(null);
  const [restored, setRestored] = useState(false);

  // pick the sort + filter back up after coming back from an artist page
  useEffect(() => {
    queueMicrotask(() => {
      try {
        const saved = JSON.parse(sessionStorage.getItem("likha-feed") || "{}");
        if (["newest", "oldest", "price", "priceDesc", "liked"].includes(saved.sort)) setSort(saved.sort);
        if (saved.medium && media.includes(saved.medium)) setMedium(saved.medium);
      } catch {}
      setRestored(true);
    });
  }, []);

  useEffect(() => {
    if (!restored) return;
    try {
      sessionStorage.setItem("likha-feed", JSON.stringify({ sort, medium }));
    } catch {}
  }, [sort, medium, restored]);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    const copy = artworks.filter(
      (a) =>
        (!medium || mediaOf(a.medium) === medium) &&
        (!q || a.title.toLowerCase().includes(q) || (getArtist(a.artist)?.name ?? "").toLowerCase().includes(q))
    );
    if (sort === "price") copy.sort((a, b) => a.price - b.price);
    else if (sort === "priceDesc") copy.sort((a, b) => b.price - a.price);
    else if (sort === "liked") copy.sort((a, b) => b.likes - a.likes);
    else if (sort === "oldest") copy.sort((a, b) => a.year - b.year);
    else copy.sort((a, b) => b.year - a.year);
    return copy;
  }, [sort, medium, query]);

  const searchBar = (
    <div className={`${styles.sortBar} caps`}>
      <label htmlFor="feed-search">Search</label>
      <input
        id="feed-search"
        type="text"
        className={styles.search}
        value={query}
        placeholder="title or artist"
        autoComplete="off"
        onChange={(e) => { setQuery(e.target.value); setOpen(null); }}
        onKeyDown={(e) => {
          if (e.key === "Escape" && query) { e.stopPropagation(); setQuery(""); }
        }}
      />
    </div>
  );

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
      <span className={styles.count}>
        {(medium || query) && (
          <button type="button" className={styles.clear} onClick={() => { setMedium(null); setQuery(""); setOpen(null); }}>
            clear
          </button>
        )}
        [ {items.length} ] works
      </span>
    </div>
  );

  const sortBar = (
    <div className={`${styles.sortBar} caps`}>
      <span>Sort</span>
      <button type="button" className={styles.sortBtn} onClick={() => { setSort("newest"); setOpen(null); }} aria-pressed={sort === "newest"}>
        {sort === "newest" ? "[•]" : "[ ]"} Newest
      </button>
      <button type="button" className={styles.sortBtn} onClick={() => { setSort("oldest"); setOpen(null); }} aria-pressed={sort === "oldest"}>
        {sort === "oldest" ? "[•]" : "[ ]"} Oldest
      </button>
      <button type="button" className={styles.sortBtn} onClick={() => { setSort("liked"); setOpen(null); }} aria-pressed={sort === "liked"}>
        {sort === "liked" ? "[•]" : "[ ]"} Liked
      </button>
      <button type="button" className={styles.sortBtn} onClick={() => { setSort(sort === "price" ? "priceDesc" : "price"); setOpen(null); }} aria-pressed={sort === "price" || sort === "priceDesc"}>
        {sort === "price" || sort === "priceDesc" ? "[•]" : "[ ]"} Price{sort === "price" ? " (low)" : sort === "priceDesc" ? " (high)" : ""}
      </button>
    </div>
  );
  const openedRef = useRef<HTMLDivElement & HTMLLIElement>(null);

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
        {searchBar}
        {filterBar}
        {sortBar}
        {items.length === 0 && <p className={`${styles.empty} caps`}>nothing matches that</p>}
        <ul className={styles.list}>
          {items.map((a) => (
            <Fragment key={a.id}>
            <li className={`${styles.row} caps`}>
              <span className={styles.thumb}>
                <Image src={a.image} alt={a.title} fill sizes="80px" />
              </span>
              <button type="button" className={styles.rowTitle} onClick={() => setOpen(a)}>
                {a.title}
              </button>
              <Link href={`/artists/${a.artist}`} className={styles.rowArtist}>
                {getArtist(a.artist)?.name}
              </Link>
              <span className={styles.rowMedium}>{a.medium}</span>
              <span className={styles.rowPrice}>{formatPrice(a.price)}</span>
              <span className={styles.rowCount}>[ {a.likes} ]</span>
            </li>
            {open?.id === a.id && (
              <li ref={openedRef as React.Ref<HTMLLIElement>} className={styles.openedRow}>
                <div className={styles.opened}>
                  <div className={styles.openedImg}>
                    <Image src={open.image} alt={open.title} width={open.width} height={open.height} sizes="50vw" />
                  </div>
                  <DetailPanel artwork={open} onClose={() => setOpen(null)} />
                </div>
              </li>
            )}
            </Fragment>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section key={view} className={styles.feed}>
      {searchBar}
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
      {items.length === 0 && <p className={`${styles.empty} caps`}>nothing matches that</p>}
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
