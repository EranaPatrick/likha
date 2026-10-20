import { featuredArtworks } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
import styles from "./Featured.module.css";

export default function Featured() {
  const items = featuredArtworks();

  return (
    <section className={styles.featured}>
      <h2 className={`${styles.label} caps`}>Featured [ {items.length} ]</h2>
      <div className={styles.row}>
        {items.map((a, i) => (
          <div key={a.id} className={styles.item}>
            <ArtworkCard artwork={a} priority={i < 2} />
          </div>
        ))}
      </div>
    </section>
  );
}
