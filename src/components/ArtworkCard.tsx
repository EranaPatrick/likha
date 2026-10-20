import Image from "next/image";
import Link from "next/link";
import { getArtist, type Artwork } from "@/data/artworks";
import styles from "./ArtworkCard.module.css";

export default function ArtworkCard({
  artwork,
  priority = false,
}: {
  artwork: Artwork;
  priority?: boolean;
}) {
  const artist = getArtist(artwork.artist);

  return (
    <figure className={styles.card}>
      <div
        className={styles.frame}
        style={{ aspectRatio: `${artwork.width} / ${artwork.height}` }}
      >
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          sizes="(max-width: 600px) 100vw, 33vw"
          priority={priority}
          className={styles.img}
        />
      </div>
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
