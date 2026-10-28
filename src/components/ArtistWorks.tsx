"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
import DetailPanel from "./DetailPanel";
import styles from "./ArtistWorks.module.css";

export default function ArtistWorks({ works }: { works: Artwork[] }) {
  const [open, setOpen] = useState<Artwork | null>(null);

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
      <div className={styles.grid}>
        {works.map((w) => (
          <ArtworkCard key={w.id} artwork={w} onOpen={setOpen} />
        ))}
      </div>
    </>
  );
}
