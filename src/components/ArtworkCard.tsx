"use client";

import Image from "next/image";
import Link from "next/link";
import { getArtist, type Artwork } from "@/data/artworks";
import styles from "./ArtworkCard.module.css";

export default function ArtworkCard({
  artwork,
  priority = false,
  onOpen,
}: {
  artwork: Artwork;
  priority?: boolean;
  onOpen?: (a: Artwork) => void;
}) {
  const artist = getArtist(artwork.artist);

  return (
    <figure className={styles.card}>
      <button
        type="button"
        className={styles.frame}
        style={{ aspectRatio: `${artwork.width} / ${artwork.height}` }}
        onClick={() => onOpen?.(artwork)}
        aria-label={`Open ${artwork.title}`}
      >
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          sizes="(max-width: 600px) 100vw, 33vw"
          priority={priority}
          className={styles.img}
        />
      </button>
      <figcaption className={`${styles.caption} caps`}>
        <span className={styles.title}>{artwork.title}</span>
        <span className={styles.meta}>
          <Link href={`/artists/${artwork.artist}`} className={styles.artist}>
            {artist?.name}
          </Link>
          <span className={styles.count}>[ {artwork.likes} ]</span>
        </span>
      </figcaption>
    </figure>
  );
}
