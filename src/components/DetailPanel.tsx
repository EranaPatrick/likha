import Link from "next/link";
import { getArtist, formatPrice, type Artwork } from "@/data/artworks";
import styles from "./DetailPanel.module.css";

export default function DetailPanel({
  artwork,
  onClose,
}: {
  artwork: Artwork;
  onClose: () => void;
}) {
  const artist = getArtist(artwork.artist);

  return (
    <aside className={styles.panel} aria-label={artwork.title}>
      <button type="button" className={`${styles.close} caps`} onClick={onClose}>
        [ X ]
      </button>
      <h2 className={`${styles.title} caps`}>{artwork.title}</h2>
      <Link href={`/artists/${artwork.artist}`} className={`${styles.artist} caps`}>
        {artist?.name}
      </Link>
      <dl className={styles.facts}>
        <dt className="caps">Medium</dt>
        <dd>{artwork.medium}</dd>
        <dt className="caps">Size</dt>
        <dd>{artwork.size}</dd>
        <dt className="caps">Year</dt>
        <dd>{artwork.year}</dd>
        <dt className="caps">Price</dt>
        <dd>{formatPrice(artwork.price)}</dd>
      </dl>
      <p className={styles.desc}>{artwork.description}</p>
      <div className={`${styles.actions} caps`}>
        <button type="button" className={styles.action}>
          Like [ {artwork.likes} ]
        </button>
        <button type="button" className={styles.action}>
          Follow {artist?.name}
        </button>
        <button type="button" className={styles.action}>
          Inquire
        </button>
      </div>
      <p className={styles.note}>Sign in to like, follow or inquire.</p>
    </aside>
  );
}
