import { artworks } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
import styles from "./Feed.module.css";

export default function Feed() {
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
