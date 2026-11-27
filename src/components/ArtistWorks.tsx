"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
import DetailPanel from "./DetailPanel";
import styles from "./ArtistWorks.module.css";

export default function ArtistWorks({ works }: { works: Artwork[] }) {
  const [open, setOpen] = useState<Artwork | null>(null);
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const sorted = useMemo(() => {
    const copy = [...works];
    copy.sort((a, b) => (sort === "newest" ? b.year - a.year : a.year - b.year));
    return copy;
  }, [works, sort]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {open && (
        <div className={styles.opened}>
          <div className={styles.openedImg}>
            <Image src={open.image} alt={open.title} width={open.width} height={open.height} sizes="50vw" />
          </div>
          <DetailPanel artwork={open} onClose={() => setOpen(null)} />
        </div>
      )}
      {works.length > 1 && (
        <div className={`${styles.sortBar} caps`}>
          <span>Sort</span>
          <button type="button" className={styles.sortBtn} onClick={() => { setSort("newest"); setOpen(null); }} aria-pressed={sort === "newest"}>
            {sort === "newest" ? "[•]" : "[ ]"} Newest
          </button>
          <button type="button" className={styles.sortBtn} onClick={() => { setSort("oldest"); setOpen(null); }} aria-pressed={sort === "oldest"}>
            {sort === "oldest" ? "[•]" : "[ ]"} Oldest
          </button>
        </div>
      )}
      <div className={styles.grid}>
        {sorted.map((w) => (
          <ArtworkCard key={w.id} artwork={w} onOpen={setOpen} />
        ))}
      </div>
    </>
  );
}
